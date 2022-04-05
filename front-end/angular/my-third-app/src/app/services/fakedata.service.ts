import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  constructor() { }

  fetchEmployees(){
    let employees : Array<Employee>;

    return new Observable(subscriber => {
      subscriber.next(1);

      setTimeout(() => {
        employees = [{id: 0, name: 'Dummy',salary: 111111 }]
        subscriber.next(employees);
        subscriber.complete();
      }, 1000);
    });
  }
}
