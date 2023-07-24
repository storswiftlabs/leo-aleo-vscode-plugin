'use strict';

import {
	createConnection,
	TextDocuments,
	ProposedFeatures,
	InitializeParams,
	TextDocumentSyncKind,
	InitializeResult,
} from "vscode-languageserver/node";
import { TextDocument } from "vscode-languageserver-textdocument";
import { validateTextDocument } from "./linter/linter";



const connection = createConnection(ProposedFeatures.all);

const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

connection.onInitialize((params: InitializeParams) => {
	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
			
		},
	};
	return result;
});


documents.onDidChangeContent(async (changeEvt) => {
	const diagnostics = await validateTextDocument(changeEvt.document);
	const textDocument = changeEvt.document;

	connection.sendDiagnostics({ uri: textDocument.uri, diagnostics });
});


documents.listen(connection);

connection.listen();