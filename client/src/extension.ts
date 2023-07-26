
import * as vscode from 'vscode';
import * as path from 'path';
import {
	LanguageClient,
	LanguageClientOptions,
	ServerOptions,
	TransportKind
} from 'vscode-languageclient/node';
import { CLProvider, execCode } from './runCode';
import { Formatter } from './format';
import { DocumentSemanticTokensProvider, legend } from './tokens';


let client: LanguageClient;
const docSelection = [
	{ scheme: 'file', language: 'aleo' },
	{ scheme: 'file', language: 'leo' },
];

export function activate(context: vscode.ExtensionContext) {
	//  Executes the Run command
	context.subscriptions.push(
		vscode.commands.registerCommand('leo-aleo-plugin.executeCode', execCode)
	);
	// Handle click Codelens
	context.subscriptions.push(
		vscode.languages.registerCodeLensProvider(docSelection, new CLProvider())
	);
	// code formatter
	context.subscriptions.push(
		vscode.languages.registerDocumentFormattingEditProvider(docSelection, new Formatter())
	);

	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};

	const clientOptions: LanguageClientOptions = {

		documentSelector: docSelection,
		synchronize: {
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	client = new LanguageClient(
		'aleo',
		serverOptions,
		clientOptions,
	);


	client.start();
}

export async function deactivate(): Promise<Thenable<void> | undefined> {
	const promises: Thenable<void>[] = [];
	if (client) {
		promises.push(client.stop());
	}

	return await Promise.all(promises).then(() => undefined);
}
