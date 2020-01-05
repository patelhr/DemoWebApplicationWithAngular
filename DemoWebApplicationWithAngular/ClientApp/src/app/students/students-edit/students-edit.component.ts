import { Component, OnInit, Input } from '@angular/core';
import { StudentsAc } from '../students.model';

@Component({
  selector: 'app-students-edit',
  templateUrl: './students-edit.component.html',
  styleUrls: ['./students-edit.component.css']
})
export class StudentsEditComponent implements OnInit {
  @Input() student: StudentsAc;
  @Input() isEdit: boolean;
  orignalStateOfStudent: StudentsAc;
  constructor() { }

  ngOnInit() {
    this.orignalStateOfStudent = this.student;
  }

  resetOrignalStateOfStudent() {
    this.student = this.orignalStateOfStudent;
    this.isEdit = false;
  }
}
