import * as assert from 'assert'
import * as vscode from 'vscode'

import {
  words_to_helloWorld,
  words_to_HelloWorld,
  words_to_HELLO_WORLD,
  words_to_hello_world,
  words_to_hello_strike_world,
} from '../../utils/index';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.')

	test('Action Transform Test', () => {
		assert.strictEqual(words_to_helloWorld()('helloWorld'), 'helloWorld')
		assert.strictEqual(words_to_helloWorld()('HelloWorld'), 'helloWorld')
		assert.strictEqual(words_to_helloWorld()('Hello_World'), 'helloWorld')
		assert.strictEqual(words_to_helloWorld()('Hello-World'), 'helloWorld')
		assert.strictEqual(words_to_helloWorld()('hello_world'), 'helloWorld')
		assert.strictEqual(words_to_helloWorld()('HELLO_WORLD'), 'helloWorld')
    
		assert.strictEqual(words_to_HelloWorld()('helloWorld'), 'HelloWorld')
		assert.strictEqual(words_to_HelloWorld()('HelloWorld'), 'HelloWorld')
		assert.strictEqual(words_to_HelloWorld()('Hello_World'), 'HelloWorld')
		assert.strictEqual(words_to_HelloWorld()('Hello-World'), 'HelloWorld')
		assert.strictEqual(words_to_HelloWorld()('hello_world'), 'HelloWorld')
		assert.strictEqual(words_to_HelloWorld()('HELLO_WORLD'), 'HelloWorld')

		assert.strictEqual(words_to_HELLO_WORLD()('helloWorld'), 'HELLO_WORLD')
		assert.strictEqual(words_to_HELLO_WORLD()('HelloWorld'), 'HELLO_WORLD')
		assert.strictEqual(words_to_HELLO_WORLD()('Hello_World'), 'HELLO_WORLD')
		assert.strictEqual(words_to_HELLO_WORLD()('Hello-World'), 'HELLO_WORLD')
		assert.strictEqual(words_to_HELLO_WORLD()('hello_world'), 'HELLO_WORLD')
		assert.strictEqual(words_to_HELLO_WORLD()('HELLO_WORLD'), 'HELLO_WORLD')

		assert.strictEqual(words_to_hello_world()('helloWorld'), 'hello_world')
		assert.strictEqual(words_to_hello_world()('HelloWorld'), 'hello_world')
		assert.strictEqual(words_to_hello_world()('Hello_World'), 'hello_world')
		assert.strictEqual(words_to_hello_world()('Hello-World'), 'hello_world')
		assert.strictEqual(words_to_hello_world()('hello_world'), 'hello_world')
		assert.strictEqual(words_to_hello_world()('HELLO_WORLD'), 'hello_world')

		assert.strictEqual(words_to_hello_strike_world()('helloWorld'), 'hello-world')
		assert.strictEqual(words_to_hello_strike_world()('HelloWorld'), 'hello-world')
		assert.strictEqual(words_to_hello_strike_world()('Hello_World'), 'hello-world')
		assert.strictEqual(words_to_hello_strike_world()('Hello-World'), 'hello-world')
		assert.strictEqual(words_to_hello_strike_world()('hello_world'), 'hello-world')
		assert.strictEqual(words_to_hello_strike_world()('HELLO_WORLD'), 'hello-world')
	});
});
