import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { SearchPipe } from './pipes/search.pipe';

const routes: Routes = [
  // { path: '', component: LoginComponent },
  { path: 'view', component: ViewEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
]

@NgModule({
  declarations: [ViewEmployeesComponent, AddEmployeeComponent, UpdateEmployeeComponent,  SearchPipe],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
