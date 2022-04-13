import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../../services/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated: boolean =  false;
  isAdmin: boolean =  false;
  private authListenerSubs? : Subscription
  private adminListenerSubs? : Subscription

  constructor(private loginService : LoginService) { }
  ngOnDestroy(): void {
    this.authListenerSubs?.unsubscribe();
  }

  ngOnInit(): void {
   this.authListenerSubs = this.loginService.getAuthStatusListener()
    .subscribe((authenticated)=> {
      this.isAuthenticated = authenticated;
    })

    this.adminListenerSubs = this.loginService.getAdminStatusListener()
    .subscribe((admin)=> {
      this.isAdmin = admin;
    })
  }

  logout(){
    this.loginService.logout();
  }

  // ngDoCheck(): void {
  //   this.isAuthenticated =  this.loginService.getAuth();
  // }

}
