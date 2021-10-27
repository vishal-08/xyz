import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ManageTaskService {

  inCompleted = JSON.parse(localStorage.getItem('taskData')!)
  completed:any = JSON.parse(localStorage.getItem('completedTask')!)

  constructor() { }

  completedTask(id: number){
    this.completed.push(this.inCompleted[id])
    this.inCompleted.splice(id, 1)
    localStorage.setItem("completedTask", JSON.stringify(this.completed))
  }

  inCompletedTask(id: number){
    this.inCompleted.push(this.completed[id])
    this.completed.splice(id, 1)
    localStorage.setItem("taskData", JSON.stringify(this.inCompleted))
  }
}

