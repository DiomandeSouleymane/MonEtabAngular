import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';

import { ChartData, ChartType } from 'chart.js';
import {SidebarComponent} from '../sidebar/sidebar.component';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  imports: [
    BaseChartDirective,
    SidebarComponent
  ],
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  studentCount = 120;
  teacherCount = 20;
  userCount = 150;

  // Configuration du diagramme circulaire
  public pieChartLabels = ['Garçons', 'Filles'];
  public pieChartData: ChartData<'pie'> = {
    labels: this.pieChartLabels,
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ['#36A2EB', '#FF6384']
      }
    ]
  };
  public pieChartType: ChartType = 'pie';
}
