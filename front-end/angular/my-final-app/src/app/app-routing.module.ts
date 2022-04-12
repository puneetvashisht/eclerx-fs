import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';



import {MaterialModule} from './shared/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AuthGuard } from './employees/addons/auth.guard';
import { LoginComponent } from './authentication/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo:'/auth/login', pathMatch: 'full'},
  { path: 'auth',
  loadChildren: () => import('./authentication/auth.module').then(m => m.AuthModule)
},
  // This is lazy loaded.. when needed
  { path: 'employee',
    loadChildren: () => import('./employees/employee.module').then(m => m.EmployeeModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes),  MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
