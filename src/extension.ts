// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import {
  helloWorld_To_HelloWorld,
  helloWorld_To_HELLO_WORLD,
  HelloWorld_To_helloWorld,
  HelloWorld_To_HELLO_WORLD,
  HELLO_WORLD_To_helloWorld,
  HELLO_WORLD_To_HelloWorld,
} from './utils/index'

export function activate(context: vscode.ExtensionContext) {

  interface ICommandMap {
    [key: string]: any
  }

  const commandMap: ICommandMap = {
    // helloWorld -> HelloWorld
    helloWorld_HelloWorld: helloWorld_To_HelloWorld,
    // helloWorld -> HELLO_WORLD
    helloWorld_HELLO_WORLD: helloWorld_To_HELLO_WORLD,

    // HelloWorld -> helloWorld
    HelloWorld_helloWorld: HelloWorld_To_helloWorld,
    // HelloWorld -> HELLO_WORLD
    HelloWorld_HELLO_WORLD: HelloWorld_To_HELLO_WORLD,

    // HELLO_WORLD -> helloWorld
    HELLO_WORLD_helloWorld: HELLO_WORLD_To_helloWorld,
    // HELLO_WORLD -> HelloWorld
    HELLO_WORLD_HelloWorld: HELLO_WORLD_To_HelloWorld,
  }

  Object.keys(commandMap).forEach(commandSubName => {
    let commandName: string = `vscode-string-transform.${commandSubName}`
    let disposable = vscode.commands.registerCommand(commandName, function () {
      // Get the active text editor
      let editor = vscode.window.activeTextEditor
      if (!editor) { return }
  
      let document = editor.document
      let selection = editor.selection
  
      let selectedText = document.getText(selection)

      // 获取单词的数组形式
      let composedFunc = commandMap[commandSubName]()
      let result = composedFunc(selectedText)

      editor.edit(editBuilder => {
        editBuilder.replace(selection, result)
      })
    })

    context.subscriptions.push(disposable)
  })
}

// this method is called when your extension is deactivated
export function deactivate() {}
