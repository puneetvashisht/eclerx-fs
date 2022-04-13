import { Component, OnInit } from '@angular/core';
import { AbstractControl, AsyncValidatorFn, FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
// import { Observable } from 'rxjs';
// import { LoginService } from 'src/app/services/login.service';
// import {ErrorStateMatcher} from '@angular/material/core';
import { LoginService } from '../../services/login.service';
import { MyErrorStateMatcher } from '../login/login.component';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {



  constructor(private formBuilder: FormBuilder, private loginService: LoginService) {

  }

  emailFormControl = new FormControl('', [Validators.required, Validators.email], [this.asyncSampleValidator.bind(this)]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  matcher = new MyErrorStateMatcher();
  // loginForm!: FormGroup


  asyncSampleValidator(): Promise<any> | Observable<any>{

    return this.loginService.findExistingUser(this.emailFormControl.value)
    .pipe(
      map((data: any)=> {
        console.log(data);
        return data.existing? {existing: true}: null;        
      })
    )

    // return new Promise((resolve, reject)=>{
    //   this.loginService.findExistingUser(this.emailFormControl.value)
    //   .subscribe((data: any)=>{
    //     if(data.existing){
    //       resolve({existing: true})
    //     }
    //     else{
    //       resolve(null);
    //     }
    //   })
    // })

  }
   


  signup(){

    let obj = { email: this.emailFormControl.value, password: this.password.value }
    console.log(obj)
    this.loginService.signup(obj)
    .subscribe(data=> console.log(data))
      // .then((data:any)=> console.log(data))

    }

  ngOnInit(): void {
    }

}
