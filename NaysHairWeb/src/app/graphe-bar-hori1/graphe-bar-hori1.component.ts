import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphe-bar-hori1',
  templateUrl: './graphe-bar-hori1.component.html',
  styleUrls: ['./graphe-bar-hori1.component.css']
})
export class GrapheBarHori1Component  {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Connectivité enrichie et création de valeur','Croissance rentable','Multiservice et Partanariat actifs','Organisation agile, ouverture et innovante','Partenariat préféré et de confiance','Politique RH et Compétences', 'Résolument Orienté Client (ROC)']
 // barChartType: ChartType = 'bar';
  barChartType: string = 'horizontalBar'
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {data:[23,32,84,31,18,28,32], label:'TAC',backgroundColor: ['blue','blue','blue','blue','blue','blue','blue']}, 
   // {data:[58,58,58,58,58,58,58],label:'Objectif'}
  ];

}
/*
  constructor() { }

  ngOnInit() {
  }

}
*/