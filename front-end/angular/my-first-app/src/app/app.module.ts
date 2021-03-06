import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BadgeComponent } from './components/badge.component';
import { MessageComponent } from './components/message.component';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { CardComponent } from './components/card/card.component';
import { ViewCoursesComponent } from './components/view-courses/view-courses.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DropdownItemComponent } from './components/dropdown-item/dropdown-item.component';

@NgModule({
  declarations: [
    AppComponent, MessageComponent, BadgeComponent, ViewEmployeesComponent, CardComponent, ViewCoursesComponent, ParentComponent, ChildComponent, DropdownComponent, DropdownItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
