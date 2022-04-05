import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { Message2Component } from './components/message2/message2.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import {HttpClientModule} from '@angular/common/http';
// import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  { path: '', component: ViewEmployeesComponent },
  { path: 'add', component: AddEmployeeComponent },
  { path: 'update/:id', component: UpdateEmployeeComponent },
]


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    Message2Component,
    CapitalizePipe,
    SearchPipe,
    AddEmployeeComponent,
    ViewEmployeesComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
