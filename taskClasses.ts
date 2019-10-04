'use strict'

const fs = require('fs');

export class taskList {
	private _listOfTasks: string [];

	constructor(){
		this._listOfTasks = [];
	}

	private readTaskList(): void {
		this._listOfTasks = fs.readFileSync('taskList.txt', 'utf8').split('\n');
		// console.log(this._listOfTasks);
	}

	public addTaskToTheList(newTask: string): void {
		fs.appendFileSync('./taskList.txt', ('\n' + newTask + ',0'))
	}

	public removeTaskFromTheList(taskID: any): void {
		this.readTaskList();
		if(this._listOfTasks.length >= 2) {
			this._listOfTasks.splice(taskID - 1, 1);
		}
		fs.writeFileSync('./taskList.txt', this._listOfTasks.join('\n'))
	}

	public completeTask(taskID: any): void {
		this.readTaskList();
		if(this._listOfTasks.length >= taskID) {
			this._listOfTasks[taskID-1] = this._listOfTasks[taskID-1].slice(0,-1) + '1';
		}
		fs.writeFileSync('./taskList.txt', this._listOfTasks.join('\n'));
	}

	public getTaskList(): void {
		this.readTaskList();
		if (this._listOfTasks.length == 0) {
			console.log('No todos for today!')
		} else {
			for (let i: number = 0; i < this._listOfTasks.length; i++){
				console.log(`${i + 1} - ${this._listOfTasks[i].slice(0, -2)}`);
			}
		}
	}
}

export let listFunctions = {
	listArguments () {
		let argumentsList: string[] = fs.readFileSync('./arguments.txt', 'utf-8').split('\n');
		console.log('Welcome to Daniel\'s To-Do Application!');
		console.log('=======================================');
		console.log('');
		for (let i: number = 0; i < argumentsList.length - 1; i++) {
			console.log('    ' + argumentsList[i]);
		}
	}
}
