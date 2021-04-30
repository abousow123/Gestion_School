import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe6',
  templateUrl: './graphe6.component.html',
  styleUrls: ['./graphe6.component.css']
})
export class Graphe6Component implements OnInit {
  public pieChartData=[18,82];
  public pieCharType='doughnut';
  pieChartColor:any = [
   {
       backgroundColor: [
         'rgb(255,0,0)',
         'rgb(192,192,192)'
       
       ]
   }
]

  constructor() { }

  ngOnInit() {
  }

}
