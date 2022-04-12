import { NgModule } from '@angular/core';
import {MaterialModule} from '../shared/material.module';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';

@NgModule({
  imports: [CommonModule, MaterialModule, EmployeeRoutingModule],
  declarations: [EmployeeRoutingModule.components]
})
export class EmployeeModule { 
}
