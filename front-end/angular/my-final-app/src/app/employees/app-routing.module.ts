import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { LoginComponent } from './components/login/login.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { SearchPipe } from './pipes/search.pipe';
import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'view', component: ViewEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
]

@NgModule({
  declarations: [ViewEmployeesComponent, AddEmployeeComponent, UpdateEmployeeComponent,  SearchPipe, LoginComponent],
  imports: [BrowserModule,MaterialModule ,RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
