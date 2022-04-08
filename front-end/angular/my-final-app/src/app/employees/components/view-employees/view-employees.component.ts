import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../../services/employee.service';
// import { Employee } from '../../employee';
// import { FakedataService } from 'src/app/services/fakedata.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  constructor(private employeeService : EmployeeService) { }


  employees: Array<Employee> = []

  deleteEmployee(id: string){
    // http delete
    // this.http.delete('http://localhost:8000/employees/' + id)
    this.employeeService.deleteEmployee(id)
    .subscribe(data => console.log(data))
  }

  ngOnInit(): void {
    console.log('Initialized once ..')
    // this.employees = this.fakeApi.fetchEmployees();
    // this.http.get('http://localhost:8000/employees')
    this.employeeService.fetchEmployees()
    .subscribe((data: any) => {
      this.employees = data
    })

    // http.get
    // extract data and put into employees array
  }

}
