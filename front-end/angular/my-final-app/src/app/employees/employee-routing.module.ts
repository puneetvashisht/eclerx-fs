import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { AuthGuard } from './addons/auth.guard';
import { EmployeeComponent } from './components/employee/employee.component';
import { SearchPipe } from './pipes/search.pipe';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    children: [
      { path: 'view', component: ViewEmployeesComponent, canActivate: [AuthGuard] },
      { path: 'add', component: AddEmployeeComponent, canActivate: [AuthGuard] },
      { path: 'update/:id', component: UpdateEmployeeComponent, canActivate: [AuthGuard] },
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class EmployeeRoutingModule { 
  static components = [EmployeeComponent, ViewEmployeesComponent, AddEmployeeComponent, UpdateEmployeeComponent, SearchPipe]
}
