import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  employees: Array<any> = []

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeService.getEmployeeListener()
    .subscribe(data => {
      this.employees = data
    })
  }
  
  loadData(){
    this.employeeService.fetchAllEmployee();
    
  }

}
