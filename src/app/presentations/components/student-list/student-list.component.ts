import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { SidebarComponent } from '../sidebar/sidebar.component';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule, FormsModule, NgIf, NgForOf]
})
export class StudentListComponent {
  studentsForm: FormGroup;
  showForm: boolean = false;
  query: string = '';
  selectedGender: string = '';
  filteredStudents: any[] = [];
  students: any[] = [
    // Données d'exemple des élèves
  ];

  constructor(private fb: FormBuilder) {
    this.studentsForm = this.fb.group({
      id: [null],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      matricule: ['', Validators.required],
      phoneNumberFather: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      urlPicture: ['', Validators.required],
      classe: ['', Validators.required],
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.studentsForm.reset(); // Réinitialise le formulaire
  }

  onSubmit(): void {
    if (this.studentsForm.valid) {
      const formData = this.studentsForm.value;
      if (formData.id) {
        const index = this.students.findIndex(s => s.id === formData.id);
        this.students[index] = formData;
      } else {
        formData.id = Date.now();
        this.students.push(formData);
      }
      this.showForm = false;
      this.studentsForm.reset();
      this.filteredStudents = [...this.students];
    }
  }

  searchStudents(): void {
    this.filteredStudents = this.students.filter(student =>
      (this.query ? student.lastName.includes(this.query) || student.matricule.includes(this.query) : true) &&
      (this.selectedGender ? student.gender === this.selectedGender : true)
    );
  }

  editStudent(id: number): void {
    const student = this.students.find(s => s.id === id);
    if (student) {
      this.studentsForm.patchValue(student);
      this.showForm = true;
    }
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(student => student.id !== id);
    this.filteredStudents = [...this.students];
  }
}
