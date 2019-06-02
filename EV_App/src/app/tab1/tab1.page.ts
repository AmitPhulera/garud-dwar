import { Component, OnInit } from '@angular/core';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  pieChartData;

  private selectedItem: any;
  private icons = [
    'battery-charging',
    'thermometer'
  ];
  private title = [
    'Available Charge',
    'Temerature'
  ]

  private notes = [
    '88%',
    '20°C'
  ]

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for(let i = 0; i<this.title.length; i++)
  {
    this.items.push({
      title: this.title[i],
      note: this.notes[i],
      icon: this.icons[i]
    });
  }
    
  }
  

  ngOnInit() {
    
    this.useAngularLibrary();
  }

  useAngularLibrary() {
    this.pieChartData = {
      chartType: 'LineChart',
      dataTable: [
        ['Battery', 'Percent'],
        [1, 68],
        [2,  65],
        [3, 64],
        [4, 61],
        [5,  56],
        [6, 53],
        [7, 48],
        [8,  43],
        [9, 41],
        [10, 39],
        [11,  35],
        [12, 32]
      ],
      options: {
      'title': 'Battery (%)',
      'width': '100%',
      // 'height': 300
      }
    };
  }

}
