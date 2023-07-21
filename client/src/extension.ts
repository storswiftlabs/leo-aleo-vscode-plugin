// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
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


// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

let client: LanguageClient;
const docSelection = [
	{ scheme: 'file', language: 'aleo' },
	{ scheme: 'file', language: 'leo' },
];
export function activate(context: vscode.ExtensionContext) {
	// Command
	// let disposable = vscode.commands.registerCommand('leo-aleo-plugin.helloWorld', async () => {
	// 	// command + shift + p 执行命令出发窗口提示
	// 	await vscode.window.showInformationMessage('Hello World from Aleo Soter!');
	// });

	// context.subscriptions.push(disposable);
	let disposable = vscode.commands.registerCommand('leo-aleo-plugin.executeCode', execCode);
	context.subscriptions.push(disposable);
	disposable = vscode.languages.registerCodeLensProvider(docSelection, new CLProvider());
	context.subscriptions.push(disposable);
	context.subscriptions.push(
		vscode.languages.registerDocumentFormattingEditProvider(docSelection, new Formatter())
	);

	// context.subscriptions.push(vscode.languages.registerDocumentFormattingEditProvider(
	// 	[
	// 		{ scheme: 'file', language: 'aleo' },
	// 		{ scheme: 'file', language: 'leo' },
	// 	], new ALeoLangFormattingProvider()
	// ));
	// LSP

	const serverModule = context.asAbsolutePath(
		path.join('server', 'out', 'server.js')
	);
	const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
	// 服务端配置信息
	// 对于 Node 形式的插件，只需要定义入口文件即可，vscode 会帮我们管理好进程的状态
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions
		}
	};
	// Options to control the language client
	const clientOptions: LanguageClientOptions = {
		// 定义插件在什么时候生效
		documentSelector: docSelection,
		synchronize: {
			// Notify the server about file changes to '.clientrc files contained in the workspace
			fileEvents: vscode.workspace.createFileSystemWatcher('**/.clientrc')
		}
	};

	// Create the language client and start the client.
	client = new LanguageClient(
		'aleo',
		serverOptions,
		clientOptions,
	);

	// Start the client. This will also launch the server
	client.start();
}

// This method is called when your extension is deactivated
export function deactivate(): Thenable<void> | undefined {
	const promises: Thenable<void>[] = [];
	if (client) {
		promises.push(client.stop());
	}

	return Promise.all(promises).then(() => undefined);
}
