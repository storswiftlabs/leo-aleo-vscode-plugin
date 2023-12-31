import * as vscode from 'vscode';

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

export const legend = (function () {
    const tokenTypesLegend = [
        'record', 'keyword', 'type', 'struct', 'enum', 'typeParameter', 'function',
        'method', 'variable', 'parameter', 'property',
    ];
    tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));

    const tokenModifiersLegend = [
        'declaration', 'documentation', 'readonly', 'static', 'abstract', 'deprecated',
        'modification', 'async'
    ];
    tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

    return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
})();



interface IParsedToken {
    line: number;
    startCharacter: number;
    length: number;
    tokenType: string;
    tokenModifiers: string[];
}

export class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
    async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
        const allTokens = this._parseText(document.getText());

        const builder = new vscode.SemanticTokensBuilder();

        allTokens.forEach((token) => {
            builder.push(token.line, token.startCharacter, token.length, this._encodeTokenType(token.tokenType), this._encodeTokenModifiers(token.tokenModifiers));
        });
        return builder.build();
    }

    private _encodeTokenType(tokenType: string): number {
        if (tokenTypes.has(tokenType)) {
            return tokenTypes.get(tokenType)!;
        } else if (tokenType === 'notInLegend') {
            return tokenTypes.size + 2;
        }
        return 0;
    }

    private _encodeTokenModifiers(strTokenModifiers: string[]): number {
        let result = 0;
        for (let i = 0; i < strTokenModifiers.length; i++) {
            const tokenModifier = strTokenModifiers[i];
            if (tokenModifiers.has(tokenModifier)) {
                result = result | (1 << tokenModifiers.get(tokenModifier)!);
            } else if (tokenModifier === 'notInLegend') {
                result = result | (1 << tokenModifiers.size + 2);
            }
        }

        return result;
    }

    private _parseText(text: string): IParsedToken[] {
        const r: IParsedToken[] = [];
        const lines = text.split(/\r\n|\r|\n/);
        const tokenPattern = /(?<!(\/\/.*))\s+\b(record|struct)\b\s+\b(\w+)\b/;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const match = tokenPattern.exec(line);
            if (match) {
                const token = match[3];
                const offset = line.indexOf(token);
                const tokenData = this._parseTextToken(token);
                r.push({
                    line: i,
                    startCharacter: offset,
                    length: token.length,
                    tokenType: tokenData.tokenType,
                    tokenModifiers: tokenData.tokenModifiers
                });
            }
        }
        
        return r;
    }

    private _parseTextToken(text: string): { tokenType: string; tokenModifiers: string[]; } {
        const parts = text.split('.');
        return {
            tokenType: parts[0],
            tokenModifiers: parts.slice(1)
        };
    }
}