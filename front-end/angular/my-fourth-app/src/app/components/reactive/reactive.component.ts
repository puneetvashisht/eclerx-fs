import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {



  profileForm: FormGroup;
  genders: Array<string> = ['male', 'female']

  constructor(private formBuilder: FormBuilder) { 
    this.profileForm =  this.formBuilder.group({
      'name': this.formBuilder.group({
        'firstName': ['', [Validators.required, this.sampleValidator]],
        'lastName': ['', [Validators.required]]
      }),
      'password': ['', [Validators.required,Validators.minLength(6)]],
      'email': ['', [Validators.required, Validators.email, Validators.minLength(6)]],
      'language': ['frech']  
    })
  }

  sampleValidator(control: FormControl): ValidationErrors | null{
    console.log(control.errors);
    
    if(control.value === 'police'){
      return {invalidText: true}
    }
    return null;
  }
  onSubmit(){
    console.log(this.profileForm);
    
  }

  get firstname() {
    return this.profileForm.get('name')?.get('firstName')
  }
  get lastname() {
    return this.profileForm.get('name')?.get('lastName')
  }
  get email() {
    return this.profileForm.get('email')
  }
  get password() {
    return this.profileForm.get('password')
  }

  ngOnInit(): void {
  }

}
