import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, AuthRoutingModule, MaterialModule, FormsModule, ReactiveFormsModule],
  declarations: [AuthRoutingModule.components]
})
export class AuthModule { 
}
