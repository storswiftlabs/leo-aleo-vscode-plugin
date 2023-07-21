
import { exec } from "child_process";
import * as vscode from "vscode";
import * as fs from "fs";
import path = require("path");

export class CLProvider implements vscode.CodeLensProvider {
    regex = /:?\s*(transition|function|inline)+\s+(\w+)\s*(?=[:()])/;
    private codeLenses: vscode.CodeLens[] = [];
    private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
    public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event;

    constructor() {
        vscode.workspace.onDidChangeConfiguration((_) => {
            this._onDidChangeCodeLenses.fire();
        });
    }
    provideCodeLenses(document: vscode.TextDocument, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CodeLens[]> {
        this.codeLenses = [];
        // 遍历文档的所有行
        let matches;
        for (let line = 0; line < document.lineCount; line++) {
            if (matches = this.regex.exec(document.lineAt(line).text)) {
                vscode.window.showInformationMessage(matches);
                let range = new vscode.Range(line, 0, line, 0);
                let command = {
                    title: "▶️Run",
                    command: "leo-aleo-plugin.executeCode",
                    tooltip: "Run this part of code",
                    arguments: [matches[2]] // 可以传递自定义的参数
                };
                let codeLens = new vscode.CodeLens(range, command);
                this.codeLenses.push(codeLens);
            }
        }
        return this.codeLenses;
    }
    resolveCodeLens?(codeLens: vscode.CodeLens, token: vscode.CancellationToken): vscode.ProviderResult<vscode.CodeLens> {
        return codeLens;
    }

}

export async function execCode(execName) {
    const langId = vscode.window.activeTextEditor.document.fileName.split('.')[1];
    const rac = new RunAleoCode();
    const rlc = new RunLeoCode();
    if (langId === "aleo") {
        rac.runAleo(execName);
    }
    if (langId === "leo") {
        rlc.quickPick(execName);
    }

}

class RunCode {
    private createTerminal(shellName: string) {
        const filePath = vscode.window.activeTextEditor.document.uri.fsPath;
        let execPath = path.dirname(filePath);
        if (execPath.endsWith('src')) {
            execPath = execPath.replace('/src', '');
        }

        let terminal = vscode.window.createTerminal({ cwd: execPath, name: shellName, });
        terminal.show();
        return terminal;
    }

    private getInputFilePath() {
        const langId = vscode.window.activeTextEditor.document.fileName.split('.')[1];
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }
        const uri = editor.document.uri;
        const filePath = uri.fsPath;
        // FIXME: Whether the path must exist in src
        const inputDirPath = filePath.substring(0, filePath.lastIndexOf(langId === "leo" ? 'src' : 'build') - 1) + '/inputs/';
        const fileName = filePath.substring(0, filePath.lastIndexOf(langId === "leo" ? 'src' : 'build') - 1).split('/').pop() + '.in';
        return inputDirPath + fileName;
    }
    private getInputContent() {

        let result: { key: string, value: string }[] = [];
        const topicRegex = /.*\[(\w+)\].*/;
        const paramsRegex = /.*\b(\w+):\s*(\w+)\s*=\s*(\w+)\s*;/;
        const filePath = this.getInputFilePath();
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' }).split('\n');
        let temp: { key: string, value: string } = { key: "", value: "" };
        for (let index = 0; index < fileContent.length; index++) {
            const tres = topicRegex.exec(fileContent[index]);
            if (tres) {
                if (temp.key !== "") {
                    result.push(temp);
                }
                temp.key = tres[1];
                temp.value = "";
            }
            const pres = paramsRegex.exec(fileContent[index]);
            if (pres) {
                temp.value += `${pres[3]} `;
            }
        }
        result.push(temp);

        return result;
    }
    private async getParams(execName: string) {
        try {
            const inputContent = await this.getInputContent();

            const findRes = inputContent.find((item) => item.key === execName);
            if (findRes) {
                return findRes.value;
            }
            return "";
        } catch (error) {
            return "";
        }

    }

    async execCommand(program: string, execName: string) {
        await vscode.window.showQuickPick(['Yes', 'No'], {
            // 是否从input文件中获取执行参数？
            placeHolder: 'Do you need to get parameters from the input file?'
        }).then(async (input) => {
            if (input === 'No') {
                // 不需要时提供一个输入框供用户输入执行参数；
                await vscode.window.showInputBox({
                    placeHolder: `Please enter parameters of the ${program} Programming.`,
                    prompt: "Example: 1u8  2u8 \"{p1: 1u8, p2: 2u8}\""
                }).then((input) => {
                    const terminal = this.createTerminal(`${program} run ${execName}`);
                    terminal.sendText(`${program} run ${execName} ${input}`);
                });
            } else {
                const params = await this.getParams(execName);
                const terminal = this.createTerminal(`${program} run ${execName}`);
                if (params) {
                    terminal.sendText(`${program} run ${execName} ${params}`);
                } else {
                    terminal.sendText(`${program} run ${execName}`);
                    // await vscode.window.showErrorMessage(`Please fill in the execution parameters; ${this.getInputFilePath()}`);
                }
            }
        });
    }
}

class RunLeoCode extends RunCode {
    constructor() {
        super();
    }
    async quickPick(execName: string) {
        await this.execCommand('leo', execName);
    }

}
class RunAleoCode extends RunCode {
    constructor() {
        super();
    }
    private async hasAleo() {

        exec(`which aleo`, (err, stdout, stderr) => {
            if (err) {
                vscode.window.showErrorMessage("Please Download aleo command in https://github.com/AleoHQ/aleo-setup");
                return false;
            }
            if (stdout.trim() === '') {
                vscode.window.showErrorMessage("Please Download aleo command in https://github.com/AleoHQ/aleo-setup");
                return false;
            }
            return true;
        });
    }

    async runAleo(execName: string) {
        if (this.hasAleo()) {
            await this.execCommand('aleo', execName);
        }
    }
}