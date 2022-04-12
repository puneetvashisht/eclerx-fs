import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnDestroy, OnChanges {


  @Input() firstName?: string;
  @Input() secondName?: string;

  previousFirstName: string | undefined = undefined;

  constructor() { 
    console.log('Child Constructor called ..')
  }

  ngOnInit(){
    console.log('Child ngOninit invoked ..')
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('Child ngOnChanges invoked ..')
    console.log(`Chnaged data-bound input properties`)
    let count=0;
    for(const changedProperty in changes){
      const changedPropertyObject = changes[changedProperty];
      const PreviousValue = changedPropertyObject.previousValue;
      const CurrentValue = changedPropertyObject.currentValue;

      // this.previousFirstName = PreviousValue

      console.log(`${++count}. Property Name: ${changedProperty}. \n PreviousValue: ${PreviousValue}. CurrentValue: ${CurrentValue}`)
    }

  }

  ngDoCheck(){
    console.log('Child ngDoCheck invoked ..')
  
    if(this.previousFirstName !== this.firstName){
      console.log(`Valud changed from ${this.previousFirstName} to ${this.firstName}`);
      this.previousFirstName = this.firstName
    }

  }




  ngOnDestroy(){
    console.log('Child ngOnDestroy invoked ..')
  }

}
