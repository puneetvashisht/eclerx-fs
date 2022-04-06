import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.myForm =  this.formBuilder.group({
      'userData': this.formBuilder.group({
        'username': ['', [Validators.required, this.sampleValidator]],
        'email': ['', [Validators.email]]
      })    
    })
  }

  sampleValidator(control: FormControl): ValidationErrors | null{
    if(control.value === 'police'){
      return {invalidText: true}
    }
    return null;
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    
    
  }

 

}
