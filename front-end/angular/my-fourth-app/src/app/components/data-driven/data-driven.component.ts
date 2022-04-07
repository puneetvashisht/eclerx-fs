import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-data-driven',
  templateUrl: './data-driven.component.html',
  styleUrls: ['./data-driven.component.css']
})
export class DataDrivenComponent implements OnInit {
  myForm: FormGroup;
  genders: Array<string> = ['male', 'female']

  constructor(private formBuilder: FormBuilder) { 
    this.myForm =  this.formBuilder.group({
      'userData': this.formBuilder.group({
        'username': ['', [Validators.required, this.sampleValidator], this.asyncSampleValidator],
        'email': ['', [Validators.email]]
      }),
      'password': ['', [Validators.required,Validators.minLength(6)]],
      'gender': ['male'],
      'hobbies': formBuilder.array(['Cricket', 'Swimming'])    
    })
  }

  get hobbies(){
    return this.myForm.get('hobbies') as FormArray
  }

  sampleValidator(control: FormControl): ValidationErrors | null{
    if(control.value === 'police'){
      return {invalidText: true}
    }
    return null;
  }
  asyncSampleValidator(control: FormControl): Promise<any>{
    return new Promise<any>((resolve, reject)=>{
      setTimeout(()=>{
        if(control.value === 'admin'){
          resolve({invalidText: true}) 
        }
        else{
          resolve(null);
        }
      }, 5000)
    })

  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.myForm);
    console.log(this.myForm.value);
    
    
  }

 

}
