import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from './presentations/components/sidebar/sidebar.component';
import {DashboardComponent} from './presentations/components/dashboard/dashboard.component';
import {StudentListComponent} from './presentations/components/student-list/student-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, DashboardComponent, StudentListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MonEtab';
}
