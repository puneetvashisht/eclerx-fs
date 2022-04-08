import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/employees/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuthenticated: boolean =  false;

  constructor(private loginService : LoginService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {
    this.isAuthenticated =  this.loginService.getAuth();
  }

}
