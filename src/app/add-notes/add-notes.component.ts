import { DatePipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseTwoDigitYear } from 'ngx-bootstrap/chronos/units/year';
import { ToastrService } from 'ngx-toastr';

import { Task } from '../task';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.css']
})
export class AddNotesComponent implements OnInit {

  @ViewChild('pickDate', { static: true })
  pickDate!: ElementRef;
  // @ViewChild('detail')  detail!: ElementRef

  taskForm!: FormGroup;
  tasks: any = []
  task: any = {}



  constructor(private _router: Router, private fb: FormBuilder, private toastr: ToastrService, private element: ElementRef, public datepipe: DatePipe) {

  }



  ngOnInit(): void {

    this.createTaskForm()
    //  this.tasks = JSON.parse(localStorage.getItem('taskData')!)
    console.log(this.pickDate.nativeElement.value)
    console.log(window.Date().slice(4, 15))
  }

  createTaskForm() {
    this.taskForm = this.fb.group({
      title: [null, Validators.required],
      detail: [null, [Validators.required, Validators.minLength(10)]],
      dueDate: [null, Validators.required],
      createdAt : new Date(),
      status : 'TODO',
      modifiedAt : [null]

    })
  }

  onSave() {

    this.tasks = JSON.parse(localStorage.getItem('taskData')!)
    this.tasks = this.tasks || []
    this.tasks.push(this.taskForm.value)
    localStorage.setItem("taskData", JSON.stringify(this.tasks))
    this.addTask(this.task)
    this.toastr.success("Task Added Successfully")
    this._router.navigate(['/home'])
  }

  addTask(task: any) {
    let tasks = []
    if (localStorage.getItem('taskData')) {
      tasks = JSON.parse(localStorage.getItem('taskData')!)
      tasks = [task, ...tasks]

      localStorage.setItem("taskData", JSON.stringify(this.tasks))
    } else {
      tasks = [task]
      localStorage.setItem("taskData", JSON.stringify(this.tasks))
    }



  }


  onCancel() {
    this._router.navigate(['/home'])
  }
  today() {
    this.createTaskForm()
    var currentDate = new Date(new Date().getTime());
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    this.taskForm.patchValue({
      dueDate : duedate
    })
    // console.log(this.pickDate.nativeElement)
    console.log(duedate)
    // // dateEl.value = 10/12/2021
    // this.dateEl.nativeElement.value = "10/04/2021"

  }

  tomorrow() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000));
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    this.taskForm.patchValue({
      dueDate : duedate
    })
    console.log(duedate)

  }
  nextWeek() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 7);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    this.taskForm.patchValue({
      dueDate : duedate
    })
    console.log(duedate)
  }

  nextMonth() {
    var currentDate = new Date(new Date().getTime() + (24 * 60 * 60 * 1000) * 30);
    var day = currentDate.getDate()
    var month = currentDate.getMonth() + 1
    var year = currentDate.getFullYear()
    var duedate = month + "/" + day + "/" + year
    this.taskForm.patchValue({
      dueDate : duedate
    })
    console.log(duedate)
  }


}
