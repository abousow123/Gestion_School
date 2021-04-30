import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-graphe-bar-hori4',
  templateUrl: './graphe-bar-hori4.component.html',
  styleUrls: ['./graphe-bar-hori4.component.css']
})
export class GrapheBarHori4Component  {
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['Work life balance','Sourcing/Recrutement','Soft skills ROCC','Segmentation / catalogue de services RH','Rénovation de la politique de rémunération','Rénovation de la charte manager' ,'Référentiel emplois et compétences', 'Refonte de la gestion de la performance(SAPER)','Positionnement DRH Groupe','Plan de développement Individue']
 // barChartType: ChartType = 'bar';
  barChartType: string = 'horizontalBar'
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {data:[23,32,84,31,18,28,32,55,64,14], label:'TAC',backgroundColor: ['blue','blue','blue','blue','blue','blue','blue','blue','blue','blue','blue']}, 
   // {data:[58,58,58,58,58,58,58],label:'Objectif'}
  ];

}
/*
  constructor() { }

  ngOnInit() {
  }

}
*/