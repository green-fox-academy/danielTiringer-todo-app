'use strict'

const fs = require('fs');

export class toDoTask {
	private _description: string;
	private _isCompleted: boolean;

	constructor(description: string){
		this._description = description;
		this._isCompleted = false;
	}

	public getDescription (): string {
		return this._description;
	}

	public completeTask (): void {
		this._isCompleted = true;
	}
}

export class taskList {
	private _listOfTasks: toDoTask [];

	constructor(){
		this._listOfTasks = [];
	}

	public addTaskToTheList(newTask: toDoTask): void {
		this._listOfTasks.push(newTask);
	}

	public removeTaskFromTheList(taskID: any): void {
		if(this._listOfTasks.length >= 2) {
			this._listOfTasks.splice(taskID - 1, 1);
		}
	}


	public getTaskList (): void {
		if (this._listOfTasks.length == 0) {
			console.log('No todos for today!')
		} else {
			for (let i: number = 0; i < this._listOfTasks.length; i++){
				console.log(`${i + 1} - ${this._listOfTasks[i].getDescription()}`)
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
