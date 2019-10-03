'use strict'

const fs = require('fs');
import { taskList } from './taskListFunction';
import { listArguments } from './listArgumentFunction';
// let fileContent = fs.readFileSync('/path/to/myfile', 'utf-8');
// console.log(fileContent);

// let fileContent = 'I can write';
// fs.writeFileSync('message.txt', fileContent);


let args: string[] = process.argv;


let mainProcess = () => {

   if (!args[2]) {
	   listArguments()
   } else if (args[2] == '-l') {
	   taskList();
   }
}

mainProcess();












