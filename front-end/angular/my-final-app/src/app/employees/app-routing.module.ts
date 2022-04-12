import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import {MaterialModule} from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AuthGuard } from './addons/auth.guard';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'employee',
    loadChildren: () => import('./employee.module').then(m => m.EmployeeModule)
  }
]

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [RouterModule.forRoot(routes),  MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
