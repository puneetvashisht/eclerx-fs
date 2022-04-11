import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  private employeeListener = new Subject<Array<any>>();

  getEmployeeListener(){
    return this.employeeListener.asObservable();
  }

  fetchAllEmployee(){
    this.http.get('http://localhost:5000/employees')
    .subscribe((data:any)=>{
      this.employeeListener.next(data)
    }) 
  }
}
