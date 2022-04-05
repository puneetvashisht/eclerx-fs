import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeService } from './services/employee.service';
import { FakedataService } from './services/fakedata.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    // tweaking the DI, by using a different class
    // {provide: EmployeeService, useClass: FakedataService},
    // {provide: 'UseFake', useValue: false},

    // // tweaking the DI, by using a method that decide which object to produce
    // {provide: EmployeeService, useFactory: (http: HttpClient, UseFake: boolean)=>{
    //   return UseFake? new FakedataService() :  new EmployeeService(http);
    // }, deps: [HttpClient, 'UseFake']}
  ]
  
})
export class AppComponent {
  title = 'my-third-app';

  constructor(){
    
  }


}
