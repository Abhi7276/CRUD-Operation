import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

import Task from '../models/task.model'
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  api_url = 'http://localhost:3000';
  taskUrl = `${this.api_url}/api/tasks`;

  constructor(private http: HttpClient) { }

  // Get Task
  getTasks(): Observable<Task[]>{
    return this.http.get(this.taskUrl).pipe(map(res =>{
      return res["data"].docs as Task[];
    }))
  }

  // Create task
  createtask(task: Task): Observable<any>{
    return this.http.post(`${this.taskUrl}`,task);
  }

  // Edit Task
  editTask(task: Task){
    let editUrl = `${this.taskUrl}`
    return this.http.put(editUrl,task);
  }

  deleteTask(id: string):any{
    let deleteUrl = `${this.taskUrl}/${id}`
    return this.http.delete(deleteUrl).pipe(map(res =>{
      console.log('Delete Response');
      return res;
      
    }))
  }
}
