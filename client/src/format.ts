import * as vscode from 'vscode';
import * as prettier from 'prettier';
import * as path from 'path';
import { RequiredOptions } from 'prettier';

interface FormatParser {
    parseIndent(line: string): string
}
// 
export async function formatDocument(document: vscode.TextDocument, context: vscode.ExtensionContext): Promise<vscode.TextEdit[]> {
    const fileInfo = await prettier.getFileInfo(document.uri.fsPath);
    if (!fileInfo.ignored) {
        const source = document.getText();

        const pluginPath = path.join(context.extensionPath, '/.prettierrc');
        const options: RequiredOptions = {
            parser: 'aleo',
            plugins: [pluginPath],
            semi: true,
            singleQuote: false,
            jsxSingleQuote: false,
            trailingComma: 'none',
            bracketSpacing: true,
            bracketSameLine: false,
            jsxBracketSameLine: false,
            rangeStart: 0,
            rangeEnd: 0,
            filepath: document.uri.fsPath,
            requirePragma: true,
            insertPragma: true,
            proseWrap: 'always',
            arrowParens: 'always',
            htmlWhitespaceSensitivity: 'ignore',
            endOfLine: 'lf',
            quoteProps: 'preserve',
            vueIndentScriptAndStyle: true,
            embeddedLanguageFormatting: 'auto',
            singleAttributePerLine: false,
            printWidth: 80,
            tabWidth: 4
        };
        //
        const unformattedCode = document.getText();
        const formattedCode = await prettier.format(unformattedCode, options);
        const range = new vscode.Range(
            document.positionAt(0),
            document.positionAt(unformattedCode.length)
        );
        return [new vscode.TextEdit(range, formattedCode)];
    }
}

export class Formatter implements vscode.DocumentFormattingEditProvider {
    provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        options.insertSpaces = true;
        const text = document.getText();
        const newText = this.format(text);
        const range = new vscode.Range(
            document.positionAt(0),
            document.positionAt(text.length)
        );
        return Promise.resolve([new vscode.TextEdit(range, newText)]);
    }

    private format(text: string): string {
        const langId = vscode.window.activeTextEditor.document.fileName.split('.')[1];
        let lineList = text.split('\n');
        lineList = lineList.flatMap((item) => item.trim());
        const newLineList: string[] = [];
        const linePattern = langId === 'aleo' ? new ParserALeo() : new ParserLeo();
        for (let i = 0; i < lineList.length; i++) {
            if (lineList[i].trim() === "") {
                continue;
            }
            let line = linePattern.parseIndent(lineList[i]);
            line = linePattern.codeBLockNewLine(line);
            newLineList.push(line);
        }
        return newLineList.join("\n");
    }

}

class ParserPattern {
    tabNum: number = 0;
    leoKeyworld = /(?:\s*(program)\b.*)/;
    aleoKeyworld = /(?:\s*(program|record|mapping|function|finalize)\b.*:\s*)/;
    codeBLockNewLine(line: string) {
        if (this.leoKeyworld.test(line)) {
            return '\n\n' + line;
        }
        return line;
    }
    generateTab(num: number, endsWithSpace?: boolean) {
        let tab = '';
        for (let i = 0; i < num; i++) {
            tab += '\t';
        }
        if (endsWithSpace) {
            tab = tab.slice(0, -1) + "   ";
        }
        return tab;
    }
}

class ParserLeo extends ParserPattern implements FormatParser {

    parseIndent(line: string) {
        const start = /.*{.*/;
        const inline = /.*\{\s*\};?/;
        const end = /.*};?/;
        const ssc = start.test(line);
        const isc = inline.test(line);
        const esc = end.test(line);
        if (ssc && !esc) {
            const res = this.generateTab(this.tabNum) + line;
            this.tabNum += 1;
            return res;
        }
        if (isc) {
            return this.generateTab(this.tabNum) + line.replace(/{\s*}/, "{ }");
        }
        if (!ssc && esc) {
            this.tabNum -= 1;
            const res = this.generateTab(this.tabNum) + line + '\n';
            return res;
        }
        return this.generateTab(this.tabNum) + line;
    }

}

class ParserALeo extends ParserPattern implements FormatParser {
    parseIndent(line: string) {
        const flPattern = /(?:\s*(finalize)\s*.*)/;
        if (this.aleoKeyworld.test(line)) {
            this.tabNum = this.tabNum !== 0 ? this.tabNum - 1 : 0;
            const res = '\n' + this.generateTab(this.tabNum) + line;
            this.tabNum += 1;
            return res;
        }
        if (flPattern.test(line)) {
            return '\n' + this.generateTab(this.tabNum, true) + line;
        }

        return this.generateTab(this.tabNum) + line;
    }
}