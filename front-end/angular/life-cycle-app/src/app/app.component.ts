import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy, OnChanges{
  title = 'life-cycle-app';
  show: boolean = true

  userFirstName = "Ritesh";
  userSecondName = "Singh";
  constructor(){
    console.log('Parent Constructor called ...')
  }

  toggleShow(){
    this.show = !this.show
  }

  ngOnInit(){
    console.log('Parents ngOninit invoked ..')
  }

  ngOnChanges(){
    console.log('Parents ngOnChanges invoked ..')
  }

  ngOnDestroy(){
    console.log('Parents ngOnDestroy invoked ..')
  }
}
