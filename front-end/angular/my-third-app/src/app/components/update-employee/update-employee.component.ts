import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) { }

  id: string = ''

  ngOnInit(): void {
    this.route.params.subscribe(param=> {
        console.log(param['id'])
        this.id = param['id'];
    });
   
  }

  updateEmployee(salary:  string){
    this.employeeService.updateEmployee(this.id, parseInt(salary))
    // this.http.patch('http://localhost:8000/employees/'+ id, {salary: parseInt(salary)})
    .subscribe((res)=> console.log(res))
  }
}
