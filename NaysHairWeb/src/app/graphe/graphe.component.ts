import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graphe',
  templateUrl: './graphe.component.html',
  styleUrls: ['./graphe.component.css']
})
export class GrapheComponent implements OnInit {
   //public pieChartLabels=['sales 01','sale 02','salle0 3','salle 4','salle 05'];
   public pieChartData=[75,25];
   public pieCharType='doughnut';
   pieChartColor:any = [
    {
        backgroundColor: [
          'rgb(138,43,226)',
          'rgb(192,192,192)'
        
        ]
    }
]
  
  constructor() { }
    
  ngOnInit() {
    
                  
   
  }

}
