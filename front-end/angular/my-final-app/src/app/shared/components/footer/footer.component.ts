import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/employees/services/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

 
  isAuthenticated: boolean =  false;
  private authListenerSubs? : Subscription

  constructor(private loginService : LoginService) { }
  ngOnDestroy(): void {
    this.authListenerSubs?.unsubscribe();
  }

  ngOnInit(): void {
   this.authListenerSubs = this.loginService.getAuthStatusListener()
    .subscribe((authenticated)=> {
      this.isAuthenticated = authenticated;
    })
  }

}
