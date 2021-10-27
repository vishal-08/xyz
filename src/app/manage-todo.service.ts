import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ManageTodoService {

  taskForm!: FormGroup;
  tasks:any = []
  task: any = {}

  constructor(private fb: FormBuilder, private toastr : ToastrService, private _router : Router) { }

  createTaskForm(){
    this.taskForm =  this.fb.group({
      title: [null, Validators.required],
      detail:[null, Validators.required],
      dueDate :[null, Validators.required]
      
    })
  }

  onSave(){
    
    this.tasks = JSON.parse(localStorage.getItem('taskData')! )
    this.tasks = this.tasks || []
    this.tasks.push(this.taskForm.value)
    localStorage.setItem("taskData",JSON.stringify(this.tasks))
     this.addTask(this.task)
    this.toastr.success("Task Added Successfully")
     this._router.navigate(['/home'])
  }

  addTask(task: any){
    let tasks = []
     if(localStorage.getItem('taskData')){
      tasks = JSON.parse(localStorage.getItem('taskData')!)
      tasks = [task, ...tasks]
  
      localStorage.setItem("taskData",JSON.stringify(this.tasks))
    }else{
      tasks = [task]
      localStorage.setItem("taskData",JSON.stringify(this.tasks))
    }

  
    
  }

}
