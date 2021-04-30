import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe3',
  templateUrl: './graphe3.component.html',
  styleUrls: ['./graphe3.component.css']
})
export class Graphe3Component implements OnInit {
   //public pieChartLabels=['sales 01','sale 02'];
   public pieChartData=[35,65];
   public pieCharType='doughnut';
   pieChartColor:any = [
    {
        backgroundColor: [
          'rgb(255,165,0)',
          'rgb(192,192,192)'
        
        ]
    }
]



   
  constructor() { }

  ngOnInit() {
  }

}
