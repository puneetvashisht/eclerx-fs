import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';


const baseUrl = 'http://localhost:8000/employees/'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {



  constructor(private http: HttpClient) { }

  fetchEmployees(){
    return this.http.get(baseUrl)
  }

  addEmployee(employee:Employee){
    return this.http.post(baseUrl, employee)
  }

  updateEmployee(id: string,salary: number) {
    return this.http.patch(baseUrl + id, {salary})
  }

  deleteEmployee(id: number){
    return this.http.delete(baseUrl + id)
  }

}
