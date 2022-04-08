import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authenticated: boolean = false;

  getAuth(){
    return this.authenticated;
  }

  constructor(private http: HttpClient, private router: Router) { }

  authenticate(user : User){
    // 
    return this.http.post('http://localhost:5000/auth/login', user)
    .subscribe((data: any) => {
      this.authenticated = data.auth;
      if(data.auth){
        this.router.navigate(['view'])
      }
    })
  }


  findExistingUser(email : string){
    // 
    return this.http.get('http://localhost:5000/auth/existing/'+ email ).toPromise();
    
  }
}
