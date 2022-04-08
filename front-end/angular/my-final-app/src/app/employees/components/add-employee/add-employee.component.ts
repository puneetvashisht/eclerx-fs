import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  
  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
  }

  addEmployee(name: string, salary: string){

    // this.http.post('http://localhost:8000/employees', {name, salary: parseInt(salary)})
    this.employeeService.addEmployee({ name, salary: parseInt(salary)})
    .subscribe(data=> {
      console.log(data);
      //programmatic navigation..
      this.router.navigate(['']);

    });

  }

}
