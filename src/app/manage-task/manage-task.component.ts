import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';

import { TasksService } from '../services/tasks.service';

@Component({
    selector: 'app-manage-task',
    templateUrl: './manage-task.component.html',
    styleUrls: ['./manage-task.component.css']
})
export class ManageTaskComponent implements OnInit {

    taskNameInput: string;
    taskDescInput: string;
    task: any;
    updateTask: boolean;

    constructor(
        private tasksService: TasksService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params.id) {
                this.updateTask = true;
                this.tasksService.getTask(params.id)
                    .then(response => {
                        console.log('Task details were gotten successfully :)');
                        this.task = response;
                        this.taskNameInput = response.title;
                        this.taskDescInput = response.description;
                    })
                    .catch(error => {
                        console.log('Couln\'t get the task details :(');
                    });
            } else {
                this.updateTask = false;
            }
        });
    }

    saveTask() {
        if (this.updateTask) {
            this.task.title = this.taskNameInput;
            this.task.description = this.taskDescInput;
            this.tasksService.updateTask(this.task)
                .then(response => {
                    console.log('Task updated successfully :)');
                    this.router.navigate(['']);
                })
                .catch(error => {
                    console.log('Couldn\'t update task :(\n' + error);
                });
        } else {
            this.tasksService.addTask({
                title: this.taskNameInput,
                description: this.taskDescInput,
                status: false
            })
                .then(response => {
                    console.log(response);
                    this.router.navigate(['']);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

}
