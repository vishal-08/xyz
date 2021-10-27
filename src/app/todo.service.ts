import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // url = "http://localhost:3000/task"
  constructor(private _http : HttpClient) { }

  // createTodo(task : Task){
  //   return this._http.post<any>(this.url, task)
  // }

  // getTodo(){
  //   return this._http.get(this.url)
  // }

 
}
