import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompletedService {

  incompletedTask:any = JSON.parse(localStorage.getItem('taskData')!)
  Completetask:any = []

  constructor() { }

  setToComplete(id: number) {
    this.Completetask.push(this.incompletedTask[id]);
    this.incompletedTask.splice(id, 1);
    // this.counter.incrementInactiveToActive()
  }
}
