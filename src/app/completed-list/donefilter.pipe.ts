import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doneFilter',
  pure: false
})
export class DoneFilterPipe implements PipeTransform {

  transform(value: any): any {
    const listArray:any = [];
    // console.log(value)
    // console.log(listArray)
    if (value.length === 0) {
      return value
    }else{
      for (const item of value) {
        
        if (item.status === "DONE") {
          listArray.push(item)
          
        }
        
      
      }
      return listArray
    }
     
  }
  }

