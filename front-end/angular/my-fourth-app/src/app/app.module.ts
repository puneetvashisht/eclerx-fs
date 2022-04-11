import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import { DataDrivenComponent } from './components/data-driven/data-driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { HighlightDirective } from './directives/highlight.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

// material imports
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenComponent,
    DataDrivenComponent,
    ReactiveComponent,
    HighlightDirective,
    ViewEmployeesComponent,
    ListEmployeesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
