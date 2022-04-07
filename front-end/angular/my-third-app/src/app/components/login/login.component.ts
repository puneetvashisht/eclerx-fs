import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  matcher = new MyErrorStateMatcher();
  // loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private loginService: LoginService) { 
    // this.loginForm =  this.formBuilder.group({
    //   'emailFormControl': this.formBuilder.control(['', [Validators.required, Validators.email]]),
    //   'password': this.formBuilder.control(['', [Validators.required,Validators.minLength(6)]]),
   
    // })
  }

  login(){

    let obj = {email: this.emailFormControl.value, password: this.password.value}
    console.log(obj)

    // http auth login request
    this.loginService.authenticate(obj)
    .subscribe(data => console.log(data));
  
  }

  ngOnInit(): void {
  }



}
