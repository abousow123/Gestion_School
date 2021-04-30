import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe5',
  templateUrl: './graphe5.component.html',
  styleUrls: ['./graphe5.component.css']
})
export class Graphe5Component implements OnInit {
  public pieChartData=[22,68];
  public pieCharType='doughnut';
  pieChartColor:any = [
   {
       backgroundColor: [
         'rgb(255,0,255)',
         'rgb(192,192,192)'
       
       ]
   }
]
  constructor() { }

  ngOnInit() {
  }

}
