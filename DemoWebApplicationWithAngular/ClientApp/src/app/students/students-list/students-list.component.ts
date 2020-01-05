import { Component, Inject } from '@angular/core';
import { HttpService } from '../../core/http.service';
import { StudentsAc } from '../students.model';


@Component({
    selector: 'app-students-list',
    templateUrl: './students-list.component.html'
})
export class StudentsListComponent {
    studentsApiUrl = 'api/students';
    students: Array<StudentsAc>;
    isEdit: boolean;
    constructor(private readonly httpService: HttpService, @Inject('BASE_URL') baseUrl) {
        this.students = new Array<StudentsAc>();
        this.studentsApiUrl = baseUrl + this.studentsApiUrl;
    }

    ngOnInit() {
        this.getStudents();
    }

    getStudents() {
        return this.httpService.get<StudentsAc[]>(this.studentsApiUrl).subscribe(result => {
            this.students = result;
        }, error => console.error(error));
    }

    editMode() {
        this.isEdit = !this.isEdit;
    }
}
