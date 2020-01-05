import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsListComponent,
    StudentsEditComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudentsModule { }
