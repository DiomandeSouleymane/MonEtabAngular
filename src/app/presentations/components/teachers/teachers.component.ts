import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import { NgForOf, NgIf } from "@angular/common";
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss'],
  standalone: true,
  imports: [SidebarComponent, ReactiveFormsModule, FormsModule, NgIf, NgForOf]
})
export class TeachersComponent {
  teacherForm: FormGroup;
  showForm: boolean = false;
  query: string = '';
  selectedGender: string = '';
  filteredTeachers: any[] = [];
  teachers: any[] = [];

  constructor(private fb: FormBuilder) {
    this.teacherForm = this.fb.group({
      id: [null],
      lastName: ['', Validators.required],
      firstName: ['', Validators.required],
      urlPicture: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      specialty: ['', Validators.required],
      available: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
    });
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
    this.teacherForm.reset(); // Réinitialise le formulaire
  }

  onSubmit(): void {
    if (this.teacherForm.valid) {
      const formData = this.teacherForm.value;
      if (formData.id) {
        const index = this.teachers.findIndex(s => s.id === formData.id);
        this.teachers[index] = formData;
      } else {
        formData.id = Date.now();
        this.teachers.push(formData);
      }
      this.showForm = false;
      this.teacherForm.reset();
      this.filteredTeachers = [...this.teachers];
    }
  }

  searchTeachers(): void {
    this.filteredTeachers = this.teachers.filter(teacher =>
      (this.query ? teacher.lastName.includes(this.query) : true) &&
      (this.selectedGender ? teacher.gender === this.selectedGender : true)
    );
  }

  editTeacher(id: number): void {
    const teacher = this.teachers.find(s => s.id === id);
    if (teacher) {
      this.teacherForm.patchValue(teacher);
      this.showForm = true;
    }
  }

  deleteTeacher(id: number): void {
    this.teachers = this.teachers.filter(teacher => teacher.id !== id);
    this.filteredTeachers = [...this.teachers];
  }
}
