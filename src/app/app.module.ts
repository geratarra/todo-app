import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageTaskComponent } from './manage-task/manage-task.component';

import { TasksService } from './services/tasks.service';


@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ManageTaskComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        FormsModule
    ],
    providers: [
        TasksService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
