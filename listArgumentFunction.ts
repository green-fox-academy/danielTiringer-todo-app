'use strict'

const fs = require('fs');

let argumentsList: string[] = fs.readFileSync('./arguments.txt', 'utf-8').split('\n');

export function listArguments () {
	console.log('Welcome to Daniel\'s To-Do Application!');
	console.log('=======================================');
	console.log('');
	for (let i: number = 0; i < argumentsList.length - 1; i++) {
		console.log('    ' + argumentsList[i]);
	}
}




