'use strict'

const fs = require('fs');
import { taskList } from './taskListFunction'
// let fileContent = fs.readFileSync('/path/to/myfile', 'utf-8');
// console.log(fileContent);

// let fileContent = 'I can write';
// fs.writeFileSync('message.txt', fileContent);


let args: string[] = process.argv;

let argumentsList: string = fs.readFileSync('./arguments.txt', 'utf-8');

let mainProcess = () => {

   if (!args[2]) {
	console.log('Welcome to Daniel\'s To-Do Application!');
	console.log('=======================================');
	console.log('');
	console.log('Please use the following arguments to access the functions of this app:');
	console.log(argumentsList);
   } else if (args[2] == '-l') {
	   taskList();
   }
}

mainProcess();












