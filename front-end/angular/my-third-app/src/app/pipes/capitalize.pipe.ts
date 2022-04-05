import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    console.log(value);
    
    if(value){
      let str: string = value.substring(0,1).toUpperCase() + value.substring(1).toLowerCase();
      return str;
    }
    return value;
  }

}
