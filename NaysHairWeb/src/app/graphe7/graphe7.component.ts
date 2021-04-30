import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe7',
  templateUrl: './graphe7.component.html',
  styleUrls: ['./graphe7.component.css']
})
export class Graphe7Component implements OnInit {
  public pieChartData=[18,82];
  public pieCharType='doughnut';
  pieChartColor:any = [
   {
       backgroundColor: [
         'rgb(222,184,135)',
         'rgb(192,192,192)'
       
       ]
   }
]

  constructor() { }

  ngOnInit() {
  }

}
