'use strict'

const fs = require('fs');

// let fileContent = fs.readFileSync('/path/to/myfile', 'utf-8');
// console.log(fileContent);

// let fileContent = 'I can write';
// fs.writeFileSync('message.txt', fileContent);

fs.writeFileSync('taskList.txt', 'all tasks should be listed here');

const args: string[] = process.argv;

console.log(process.argv);


if (args.length = 2) {

   console.log('Welcome to Daniel\'s To-Do Application!');
   console.log('=======================================');
   console.log('');
   console.log('Please use the following arguments to access the functions of this app:');
   console.log(fs.readFileSync('./arguments.txt', 'utf-8'));

}















