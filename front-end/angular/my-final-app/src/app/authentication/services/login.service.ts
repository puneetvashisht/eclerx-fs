import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { User } from '../models/user';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authenticated: boolean = false;
  private isAdmin: boolean = false;
  private token?: string;

  private authStatusListener = new Subject<boolean>();
  private adminStatusListener = new Subject<boolean>();

  getAuth(){
    return this.authenticated;
  }

  getToken(){
    return this.token
  }

  getAuthStatusListener(){
    return this.authStatusListener.asObservable();
  }
  getAdminStatusListener(){
    return this.adminStatusListener.asObservable();
  }

  constructor(private http: HttpClient, private router: Router) { }


  logout(){
    this.authenticated = false
    this.authStatusListener.next(this.authenticated);
    this.router.navigate([''])
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  authenticate(user : User){
    // 
    return this.http.post('http://localhost:5000/auth/login', user)
    .subscribe((data: any) => {
      this.authenticated = data.auth;
      this.authStatusListener.next(data.auth)

      if(data.token){
        this.token = data.token

        // 1. decoded token ... 
        // 2. admin = true/false, use subject to multicast
        console.log('Decoding token');
      const tokenInfo = this.getDecodedAccessToken(data.token);
      console.log('Decoded token');
      console.log(tokenInfo);
      if(tokenInfo.role == 'admin'){
        this.isAdmin = true
        this.adminStatusListener.next(true);
      }

        localStorage.setItem('Bearer', data.token)
      }
    
      if(data.auth){
        this.router.navigate(['employee/view'])
      }
    })
  }


  findExistingUser(email : string){
    // 
    return this.http.get('http://localhost:5000/auth/existing/'+ email );
    
  }

  signup(user: User){
    return this.http.post('http://localhost:5000/auth/signup', user);
  }
}
