import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe8',
  templateUrl: './graphe8.component.html',
  styleUrls: ['./graphe8.component.css']
})
export class Graphe8Component implements OnInit {
  public pieChartData=[75,25];
  public pieCharType='doughnut';
  pieChartColor:any = [
   {
       backgroundColor: [
         'rgb(255,255,0)',
         'rgb(192,192,192)'
       
       ]
   }
]
  constructor() { }

  ngOnInit() {
  }

}
