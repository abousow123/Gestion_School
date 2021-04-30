import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe9',
  templateUrl: './graphe9.component.html',
  styleUrls: ['./graphe9.component.css']
})
export class Graphe9Component implements OnInit {
   //public pieChartLabels=['sales 01','sale 02','salle0 3','salle 4','salle 05'];
   public pieChartData=[31,69];
   public pieCharType='doughnut';
   pieChartColor:any = [
    {
        backgroundColor: [
          'rgb(0,0,255)',
          'rgb(192,192,192)'
        
        ]
    }
]
  constructor() { }

  ngOnInit() {
  }

}
