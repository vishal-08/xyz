import { Component, OnInit } from '@angular/core';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent implements OnInit {

  listsArray : any =[]
  completedArray : any = []
  isCollapsed = false;
  countArray!: number;

  constructor(private toastr : ToastrService) { }

  ngOnInit(): void {
    
    this.listsArray = JSON.parse(localStorage.getItem('taskData')!)
    
  }


  
  
  
  completedDelete(index : number){
    if(window.confirm('Are sure you want to delete this item ?')){
      this.completedArray.splice(index, 1)
    localStorage.setItem("completedTask",JSON.stringify(this.completedArray))
    this.toastr.warning("Completed Task Deleted Successfully")
     }
    
    // this.getlist()
    setTimeout(() => {
      location.reload()
    }, 1000);
  }
}
