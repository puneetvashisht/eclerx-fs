import { Pipe, PipeTransform } from '@angular/core';
import { Employee } from '../models/employee';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(employees: Array<Employee>, ...args: Array<string>): Array<Employee> {
    return employees.filter(e => e.name.includes(args[0]))
  }

}
