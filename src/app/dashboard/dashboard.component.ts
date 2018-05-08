import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { TasksService } from '../services/tasks.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public tasks: any[];

    constructor(
        private tasksService: TasksService,
        private router: Router
    ) { }

    ngOnInit() {
        this.getTasks();
    }

    getTasks(): void {
        this.tasksService.getTasks()
        .then(response => {
            this.tasks = response;
        })
        .catch(error => {
            console.error('Error while trying to get tasks list');
        });
    }

    updateTaskStatus(task: any): void {
        task.status = task.status ? task.status = false : task.status = true;
        this.tasksService.updateTask(task)
        .then(response => {
            console.log('Task updated successfully!');
            this.getTasks();
        })
        .catch(error => {
            console.error('Error while trying to update task list');
        });
    }

    deleteTask(taskId: Number): void {
        this.tasksService.deleteTask(taskId)
        .then(response => {
            console.log('Task deleted successfully!');
            this.getTasks();
        })
        .catch(error => {
            console.log(error);
        });
    }

}
