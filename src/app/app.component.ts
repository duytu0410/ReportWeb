import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  view = [500,400];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  legendTitle = 'Legend';
  legendPosition = 'right';
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'GDP Per Capita';
  showGridLines = true;
  innerPadding = '10%';
  animations: boolean = true;
  barChart: any[] = barChart;
  lineChartSeries: any[] = lineChartSeries;
  lineChartScheme = {
    name: 'coolthree',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b', '#7aa3e5', '#a8385d', '#00bfa5']
  };

  comboBarScheme = {
    name: 'singleLightBlue',
    selectable: true,
    group: 'Ordinal',
    domain: ['#01579b']
  };

  showRightYAxisLabel: boolean = true;
  yAxisLabelRight: string = 'Utilization';
}

export let lineChartSeries = [
 
    {
    name: 'Computers',
    series: [
          {
      value: 2,
      name: 'USA',

    },
      {
        value: 4,
        name: 'United Kingdom'
      },
      {
        value: 20,
        name: 'France'
      },
      {
        value: 30,
        name: 'Japan'
      },
      {
        value: 35,
        name: 'China'
      }
    ]
  }
];

export let barChart: any = [
  {
    name: 'USA',
    value: 50000
  },
  {
    name: 'United Kingdom',
    value: 30000
  },
  {
    name: 'France',
    value: 10000
  },
  {
    name: 'Japan',
    value: 5000
  },
  {
    name: 'China',
    value: 500
  }
];
