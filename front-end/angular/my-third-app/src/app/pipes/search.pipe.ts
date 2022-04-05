import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(values: Array<string>, ...args: Array<string>): Array<string> {
    console.log(values);
    let filteredValues = values.filter(v=> v.startsWith(args[0]))
    return filteredValues;
    
  }

}
