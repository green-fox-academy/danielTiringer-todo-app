'use strict'

const fs = require('fs');

import { taskList, toDoTask } from './taskClasses';

let danielsToDoList = new taskList();

danielsToDoList.addTaskToTheList('Go salsa dancing');
danielsToDoList.addTaskToTheList('Cook babgulyas with csulok');
danielsToDoList.addTaskToTheList('Watch educational videoes');
