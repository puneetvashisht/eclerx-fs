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

  logout(){
    this.loginService.logout();
  }

  // ngDoCheck(): void {
  //   this.isAuthenticated =  this.loginService.getAuth();
  // }

}
