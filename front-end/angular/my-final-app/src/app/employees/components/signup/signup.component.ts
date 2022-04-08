import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
// import { LoginService } from 'src/app/services/login.service';
// import {ErrorStateMatcher} from '@angular/material/core';
import { LoginService } from '../../services/login.service';
import { MyErrorStateMatcher } from '../login/login.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  matcher = new MyErrorStateMatcher();
  // loginForm!: FormGroup


  // asyncSampleValidator(): AsyncValidatorFn {
  // return (control: AbstractControl): Promise<any>  => {
  //   // return userService.getUserByMobileNumber(control.value).pipe(map(
  //   //   (users: User[]) => {
  //   //     return (users && users.length > 0) ? { "mobNumExists": true } : null;
  //   //   }
  //   // ));

  //   return this.loginService.findExistingUser(this.emailFormControl.value)
  //   .then((data)=> console.log(data))
  //   // .then()
    
  // };
// } 

  // asyncSampleValidator(control: FormControl): AsyncValidatorFn{
  //   // return new Promise<any>((resolve, reject)=>{
  //   //   setTimeout(()=>{
  //   //     if(control.value === 'admin'){
  //   //       resolve({invalidText: true}) 
  //   //     }
  //   //     else{
  //   //       resolve(null);
  //   //     }
  //   //   }, 5000)
  //   // })
  //   return null;

  // }

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { 
    
  }

  signup(){

    let obj = {email: this.emailFormControl.value, password: this.password.value}
    console.log(obj)
    return this.loginService.findExistingUser(this.emailFormControl.value)
      .then((data)=> console.log(data))
  
  }

  ngOnInit(): void {
  }

}
