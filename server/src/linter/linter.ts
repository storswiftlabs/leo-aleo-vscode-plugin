import { TextDocument } from "vscode-languageserver-textdocument";
import { Diagnostic, DiagnosticRelatedInformation, Location, Position, Range } from "vscode-languageserver/node";
import "vscode-languageserver-protocol";
import {  CharStreams, CommonTokenStream, ErrorListener,  RecognitionException, Recognizer } from "antlr4";
import LeoParser from "./leoAntlr/LeoParser";
import LeoLexer from "./leoAntlr/LeoLexer";

import AleoLexer from "./AleoAntlr/AleoLexer";
import AleoParser from "./AleoAntlr/AleoParser";


let diagnostic: Diagnostic[] = [];
let uri = '';
export async function validateTextDocument(document: TextDocument): Promise<Diagnostic[]> {
    const textList = document.getText();
    let langId = document.uri.split('.')[1];
    uri = document.uri;
    let lexer: LeoLexer | AleoLexer;
    let tokens: CommonTokenStream;
    let parser: LeoParser | AleoParser;

    diagnostic = [];
    if (langId === 'aleo') {
        lexer = new AleoLexer(CharStreams.fromString(textList));
        tokens = new CommonTokenStream(lexer);
        parser = new AleoParser(tokens);
    } else {
        lexer = new LeoLexer(CharStreams.fromString(textList));
        tokens = new CommonTokenStream(lexer);
        parser = new LeoParser(tokens);
    }
    parser.addErrorListener(new LeoErrorLister());

    parser.sourceUnit();
    parser.removeErrorListeners();
    return diagnostic;

}

class LeoErrorLister extends ErrorListener<any>{
    async syntaxError(recognizer: Recognizer<any>, offendingSymbol: any, line: number, column: number, msg: string, e: RecognitionException | undefined) {
        const range = Range.create(
            Position.create(line - 1, column),
            Position.create(line - 1, column)
        );
        diagnostic.push({
            range: range,
            message: 'syntax error: ' + msg,
            source: e?.offendingToken?.text,
            relatedInformation: [DiagnosticRelatedInformation.create(
                Location.create(uri, range),
                msg,
            )]
        });
    }
}
