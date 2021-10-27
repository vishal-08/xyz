import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, statusName: string): any {
    const completedArray = [];
    if (value.length === 0) {
      return value


    }else{
      for (const item of value) {

        if (item[statusName] === 'TODO') {
          completedArray.push(item)

        }  
      }
  
      return completedArray
    } 
    
  }

}

