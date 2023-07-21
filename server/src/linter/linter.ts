import { TextDocument } from "vscode-languageserver-textdocument";
import { Diagnostic, DiagnosticRelatedInformation, Location, Position, Range } from "vscode-languageserver/node";
import "vscode-languageserver-protocol";
import { CharStream, CharStreams, CommonTokenStream, ErrorListener, FileStream, InputStream, RecognitionException, Recognizer } from "antlr4";
import LeoParser from "./leoAntlr/LeoParser";
import LeoLexer from "./leoAntlr/LeoLexer";



let diagnostic: Diagnostic[] = [];
let uri = '';
export function validateTextDocument(document: TextDocument): Diagnostic[] {
    const textList = document.getText();

    uri = document.uri;
    try {
        // const chars = new CharStreams(textList);
        diagnostic = [];
        const lexer = new LeoLexer(CharStreams.fromString(textList));
        const tokens = new CommonTokenStream(lexer);
        const parser = new LeoParser(tokens);

        parser.addErrorListener(new LeoErrorLister());

        parser.sourceUnit();
        parser.removeErrorListeners();
        return diagnostic;
    } catch (error) {

    }
    return [];
}

class LeoErrorLister extends ErrorListener<any>{
    syntaxError(recognizer: Recognizer<any>, offendingSymbol: any, line: number, column: number, msg: string, e: RecognitionException | undefined) {
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
