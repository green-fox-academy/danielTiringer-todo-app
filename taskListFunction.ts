'use strict'

const fs = require('fs');
let toDoList: string[] = fs.readFileSync('./taskList.txt', 'utf-8').toString().split('\n');

export function taskList () {
	if (toDoList.length == 0) {
		console.log('No todos for today!');
	} else {
		for (let i: number = 1; i < toDoList.length; i++){
			console.log(`${i} -  ${toDoList[i - 1]}`);
		}
	}
}
