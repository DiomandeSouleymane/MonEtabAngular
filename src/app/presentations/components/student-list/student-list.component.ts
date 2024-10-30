import { Component, Input } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from '../sidebar/sidebar.component';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent],
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {
  @Input() students = [
    { id: 1, firstName: 'Alice', lastName: 'Dupont', matricule: 'A123', phoneNumber: '0123456789', gender: 'WOMAN' },
    { id: 2, firstName: 'Bob', lastName: 'Martin', matricule: 'B456', phoneNumber: '0987654321', gender: 'MAN' }
  ];

  query: string = '';
  selectedGender: string = '';
  filteredStudents = this.students;

  searchStudents() {
    this.filteredStudents = this.students.filter(student => {
      return (
        (!this.query || student.firstName.includes(this.query) || student.lastName.includes(this.query) || student.matricule.includes(this.query)) &&
        (!this.selectedGender || student.gender === this.selectedGender)
      );
    });
  }

  editStudent(id: number) {
    console.log(`Edit student with ID: ${id}`);
  }

  deleteStudent(id: number) {
    console.log(`Delete student with ID: ${id}`);
  }
}
