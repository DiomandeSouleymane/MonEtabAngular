import { Component } from '@angular/core';
import {
  faUser,
  faUserSlash,
  faChalkboardTeacher,
  faChartPie,
  faSchool,
  faSignOutAlt,
  faDashboard
} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, FaIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  faUser = faUser;
  faUserSlash = faUserSlash;
  faChalkboardTeacher = faChalkboardTeacher;
  faChartPie = faChartPie;
  faSchool = faSchool;
  faSignOutAlt = faSignOutAlt;
  protected readonly faDashboard = faDashboard;
}
