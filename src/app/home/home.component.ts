import { literalArr } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 
  listsArray : any =[]
  completedArray : any = []
  todoArray : any =[]

  constructor(private _task : TodoService, private _router : Router) { }

  ngOnInit(): void {
    
    this.listsArray = JSON.parse(localStorage.getItem('taskData')!)
    
    for(let i=0;i<this.listsArray.length;i++)
    {
      if(this.listsArray[i].status === 'TODO'){
        this.todoArray.push(this.listsArray[i])
        console.log(this.todoArray)
      }
      else{
        this.completedArray.push(this.listsArray[i])
        console.log(this.completedArray)
      }
    }
  }

  getList(){
    
  }


  
}
