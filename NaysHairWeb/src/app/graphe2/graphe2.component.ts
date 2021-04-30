import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphe2',
  templateUrl: './graphe2.component.html',
  styleUrls: ['./graphe2.component.css']
})
export class Graphe2Component {

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Connectivité enrichie et création de valeur','Croissance rentable','Multiservice et Partanariat actifs','Organisation agile, ouverture et innovante','Partenariat préféré et de confiance','Politique RH et Compétences', 'Résolument Orienté Client (ROC)'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {data:[23,32,84,31,18,28,32], label:'TAC'}, 
    {data:[58,58,58,58,58,58,58],label:'Objectif'}
  ];

}
/*
  public barCharOptions= {
    scaleShowVerticalLines:false,
    responsive:true


  }
  public barChartLabels=['10','20','30','40','50','60','70','80','90']
  public barChartType='bar';
  //public barCharLegend='true';
  public barChartData =[
    {data:[23,32,84,31,18,28,32], label:'TAC'}, 
    {data:[58,58,58,58,58,58,58],label:'Objectif'}
  ]
 */
