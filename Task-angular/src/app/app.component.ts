import { Component, OnInit } from '@angular/core';
import Task from './models/task.model';
import { TaskService } from './services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task-angular';

  constructor(private taskService: TaskService){}

  public newTask: Task = new Task();

  taskList: Task[];
  editTasks: Task[] = [];
  display = "none";
  
 
  ngOnInit(): void{
    this.taskService.getTasks().subscribe(task => {
      this.taskList = task;
      console.log(task);
      
    })
  }

  create(){
    this.taskService.createtask(this.newTask).subscribe((res)=>{
      this.taskList.push(res.data);
      this.newTask = new Task();
      this.display = "none";
    })
  }

  edit(task: Task){
    console.log(task);
    if(this.taskList.includes(task)){
      if (!this.editTasks.includes(task)) {
        this.editTasks.push(task);
      } else {
        this.editTasks.splice(this.editTasks.indexOf(task),1)
        this.taskService.editTask(task).subscribe((res)=> {
          console.log('Update Successfull');
        },err=>{
          
          console.error('Update UnSuccessfull');
        })
      }
    }
  }

  submitTask(event,task:Task){
    if(event.keycode == 13){
      this.edit(task);
    }
  }

  delete(task: Task){
    this.taskService.deleteTask(task._id).subscribe(res => {
      console.log('Id', res);
      
      this.taskList.splice(this.taskList.indexOf(task),1);
    })
  }
}
