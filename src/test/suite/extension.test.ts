import * as assert from 'assert'
import * as vscode from 'vscode'

import {
  helloWorld_To_HelloWorld,
  helloWorld_To_HELLO_WORLD,
  HelloWorld_To_helloWorld,
  HelloWorld_To_HELLO_WORLD,
  HELLO_WORLD_To_helloWorld,
  HELLO_WORLD_To_HelloWorld,
} from '../../utils/index';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.')

	test('Action Transform Test', () => {
		assert.equal(helloWorld_To_HelloWorld()('helloWorld'), 'HelloWorld')
		assert.equal(helloWorld_To_HELLO_WORLD()('helloWorld'), 'HELLO_WORLD')
		assert.equal(HelloWorld_To_helloWorld()('HelloWorld'), 'helloWorld')
		assert.equal(HelloWorld_To_HELLO_WORLD()('HelloWorld'), 'HELLO_WORLD')
		assert.equal(HELLO_WORLD_To_helloWorld()('HELLO_WORLD'), 'helloWorld')
		assert.equal(HELLO_WORLD_To_HelloWorld()('HELLO_WORLD'), 'HelloWorld')
	});
});
