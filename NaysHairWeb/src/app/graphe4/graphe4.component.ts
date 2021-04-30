import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe4',
  templateUrl: './graphe4.component.html',
  styleUrls: ['./graphe4.component.css']
})
export class Graphe4Component implements OnInit {
   //public pieChartLabels=['32','68'];
   public pieChartData=[32,68];
   public pieCharType='doughnut';
   pieChartColor:any = [
    {
        backgroundColor: [
          'rgb(0,128,0)',
          'rgb(192,192,192)'
        
        ]
    }
]
  
  constructor() { }

  ngOnInit() {
  }

}
