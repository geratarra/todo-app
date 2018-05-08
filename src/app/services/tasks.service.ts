import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TasksService {

    private url = 'http://localhost:3000/todo';

    constructor(
        private http: Http
    ) { }

    getTask(taskId: Number): Promise<any> {
        return this.http
            .get(this.url + '/' + taskId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getTasks(): Promise<any> {
        return this.http
            .get(this.url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    addTask(requestBody: any): Promise<any> {
        return this.http.post(this.url, requestBody)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    deleteTask(taskId: Number): Promise<any> {
        return this.http.delete(this.url + '/' + taskId)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    updateTask(task): Promise<any> {
        return this.http.put(this.url + '/' + task.id, task)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response | any) {
        if (error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
            console.log('An error occurred:', error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.log(`Backend returned code ${error.status}, body was: ${error.error}`);
            console.log('Backend _body error message >> ' + (<any>error)._body);
        }
        return Promise.reject(error.message || error);
    }

}
