import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './authentication/components/header/header.component';
import { FooterComponent } from './authentication/components/footer/footer.component';
import { EmployeeComponent } from './employees/components/employee/employee.component';
import { MaterialModule } from './shared/material.module';
import { AuthComponent } from './authentication/components/auth/auth.component';
import { AuthInterceptor } from './shared/auth.interceptor';
// import { SearchPipe } from './employees/pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AuthComponent
   
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
