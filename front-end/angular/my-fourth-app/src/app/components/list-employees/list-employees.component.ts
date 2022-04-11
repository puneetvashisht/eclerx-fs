import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  employees: Array<any> = []

  ngOnInit(): void {
    this.employeeService.getEmployeeListener()
    .subscribe(data => {
      this.employees = data
    })
  }

}
