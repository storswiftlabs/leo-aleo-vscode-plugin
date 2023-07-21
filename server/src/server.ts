'use strict';

import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	CompletionItem,
	TextDocumentSyncKind,
	InitializeResult,
	DocumentHighlightParams,
	DocumentHighlight,
	DocumentHighlightKind,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { validateTextDocument } from "./linter/linter";



const connection = createConnection(ProposedFeatures.all);

const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((params: InitializeParams) => {
	const capabilities = params.capabilities;
	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			documentHighlightProvider: true,
		},
	};

	return result;
});


documents.onDidChangeContent((changeEvt) => {
	const diagnostics = validateTextDocument(changeEvt.document);
	const textDocument = changeEvt.document;

	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
});

connection.onDocumentRangeFormatting((params) => {
	return [];
});

connection.onDocumentHighlight(
	(params: DocumentHighlightParams): Promise<DocumentHighlight[]> => {
		const { textDocument } = params;
		const doc = documents.get(textDocument.uri)!;
		const text = doc.getText();
		const pattern = /\badd\b/i;
		const res: DocumentHighlight[] = [];
		let match;
		while ((match = pattern.exec(text))) {
			res.push({
				range: {
					start: doc.positionAt(match.index),
					end: doc.positionAt(match.index + match[0].length),
				},
				kind: DocumentHighlightKind.Write,
			});
		}
		return Promise.resolve(res);
	}
);


// This handler resolves additional information for the item selected in
// the completion list.
connection.onCompletionResolve((item: CompletionItem): CompletionItem => {

	return item;
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();