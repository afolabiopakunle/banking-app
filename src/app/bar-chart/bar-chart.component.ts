import {Component, OnInit} from '@angular/core';
import {ChartConfiguration} from "chart.js";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],

    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 90, 85], label: 'Inflow',
        borderRadius: Number.MAX_VALUE,
        backgroundColor: '#8854FF',
        barThickness: 6
      },
      {
        data: [28, 48, 40, 19, 86, 27, 40, 43], label: 'Outflow',
        borderRadius: Number.MAX_VALUE,
        backgroundColor: '#E33A24',
        barThickness: 6
      }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
    scales: {
      xAxis: {
        display: true,
        grid: {
          drawBorder: false // removes random border at bottom
        },
      },
      yAxis: {
        display: false
      }
    },

    plugins: {
      legend: {
        display: false,
        align: 'end',
        labels: {
          usePointStyle: true,
          boxWidth: 6,
          boxHeight: 8
        },
      }
    }
  };

}
