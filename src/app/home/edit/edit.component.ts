import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  @ViewChild('titleEl', { static: true }) titleEl!: ElementRef;
  @ViewChild('detailEl', { static: true }) detailEl!: ElementRef;
  @ViewChild('dateEl', { static: true }) dateEl!: ElementRef;

  listsArray = JSON.parse(localStorage.getItem('taskData')!)
     id = this.route.snapshot.params['id']
   
     title = this.listsArray[this.id].title
     detail = this.listsArray[this.id].detail
     date = this.listsArray[this.id].dueDate.slice(0,10)
    dueDate =this.datepipe.transform(this.date, 'MM/dd/yyyy')
    createdAt = this.listsArray[this.id].createdAt
    status = this.listsArray[this.id].status
   

  constructor(private route: ActivatedRoute, private _router : Router,  private fb: FormBuilder, public datepipe: DatePipe, private toastr : ToastrService) { }

//  localArray = JSON.parse(localStorage.getItem('taskData')!)
 
 
  ngOnInit(): void {
    
   console.log()
    
    
    
  }

  
  onCancel(){
    this._router.navigate(['/home'])
  }

  update(){

    const taskObj ={
      title : this.titleEl.nativeElement.value,
      detail : this.detailEl.nativeElement.value,
      dueDate : this.dateEl.nativeElement.value, 
      modifiedAt : new Date(),
      createdAt : this.createdAt,
      status :this.status
    }
   
    this.listsArray.splice(this.id, 1, taskObj)

    localStorage.setItem("taskData", JSON.stringify(this.listsArray))

    this.toastr.success("Data Upated Successfully")

    setTimeout(() => {
      this._router.navigate(['/'])
    }, 1000);
    

  }

}
