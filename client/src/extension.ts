
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


let client: LanguageClient;
const docSelection = [
	{ scheme: 'file', language: 'aleo' },
	{ scheme: 'file', language: 'leo' },
];

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('leo-aleo-plugin.executeCode', execCode);
	context.subscriptions.push(disposable);
	disposable = vscode.languages.registerCodeLensProvider(docSelection, new CLProvider());
	context.subscriptions.push(disposable);
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

export function deactivate(): Thenable<void> | undefined {
	const promises: Thenable<void>[] = [];
	if (client) {
		promises.push(client.stop());
	}

	return Promise.all(promises).then(() => undefined);
}
