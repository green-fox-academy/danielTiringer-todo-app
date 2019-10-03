'use strict'

const fs = require('fs');

// let fileContent = fs.readFileSync('/path/to/myfile', 'utf-8');
// console.log(fileContent);

// let fileContent = 'I can write';
// fs.writeFileSync('message.txt', fileContent);

fs.writeFileSync('taskList.txt', 'all tasks should be listed here');

const args: string[] = process.argv;

console.log(process.argv);

console.log(fs.readFileSync('./taskList.txt', 'utf-8'));













