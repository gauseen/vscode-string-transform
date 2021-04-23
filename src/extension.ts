// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import {
  words_to_helloWorld,
  words_to_HelloWorld,
  words_to_HELLO_WORLD,
  words_to_hello_world,
  words_to_hello_strike_world,
} from './utils/index'

export function activate(context: vscode.ExtensionContext) {

  interface ICommandMap {
    [key: string]: any
  }

  const commandMap: ICommandMap = {
    to_helloWorld: words_to_helloWorld,
    to_HelloWorld: words_to_HelloWorld,
    to_HELLO_WORLD: words_to_HELLO_WORLD,
    to_hello_world: words_to_hello_world,
    to_hello_strike_world: words_to_hello_strike_world,
  }

  Object.keys(commandMap).forEach(commandSubName => {
    let commandName: string = `vscode-string-transform.${commandSubName}`
    let disposable = vscode.commands.registerCommand(commandName, function () {
      // Get the active text editor
      let editor = vscode.window.activeTextEditor
      if (!editor) return
  
      let document = editor.document
      // 获取单词的数组形式
      let composedFunc = commandMap[commandSubName]()

      editor?.edit(editBuilder => {
        editor?.selections.forEach((selection) => {
          const range = selection.isEmpty ? document.getWordRangeAtPosition(selection.start) || selection : selection;
          let selectedText = document.getText(range)
          let result = composedFunc(selectedText)
          editBuilder.replace(range, result)
        })
      })
    })

    context.subscriptions.push(disposable)
  })
}

// this method is called when your extension is deactivated
export function deactivate() {}
