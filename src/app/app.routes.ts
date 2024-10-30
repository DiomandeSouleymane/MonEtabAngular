import {RouterModule, Routes} from '@angular/router';
import {ReportComponent} from './presentations/components/report/report.component';
import {UsersComponent} from './presentations/components/users/users.component';
import {TeachersComponent} from './presentations/components/teachers/teachers.component';
import {StudentsComponent} from './presentations/components/students/students.component';
import {DashboardComponent} from './presentations/components/dashboard/dashboard.component';
import {NgModule} from '@angular/core';
import {StudentListComponent} from './presentations/components/student-list/student-list.component';

export const routes: Routes = [

  { path: 'home', component: DashboardComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'users', component: UsersComponent },
  { path: 'report', component: ReportComponent },
  { path: 'student-list', component: StudentListComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
