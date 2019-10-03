'use strict'

const fs = require('fs');
import { listFunctions } from './taskClasses';
import { taskList, toDoTask } from './taskClasses';

// let fileContent = 'I can write';
// fs.writeFileSync('message.txt', fileContent);


let args: string[] = process.argv;

let danielsToDoList = new taskList();

danielsToDoList.addTaskToTheList(new toDoTask('Go salsa dancing'));
danielsToDoList.addTaskToTheList(new toDoTask('Cook babgulyas with csulok'));
danielsToDoList.addTaskToTheList(new toDoTask('Watch educational videoes'));

let mainProcess = () => {
	if (!args[2]) {
		listFunctions.listArguments()
	} else if (args[2] == '-l') {
		danielsToDoList.getTaskList();
	} else if (args[2] == '-a') {
		danielsToDoList.addTaskToTheList(new toDoTask(args[3]));
		danielsToDoList.getTaskList();
	} else if (args[2] == '-r') {
		danielsToDoList.removeTaskFromTheList(args[3]);
		danielsToDoList.getTaskList();
	}
}

mainProcess();












