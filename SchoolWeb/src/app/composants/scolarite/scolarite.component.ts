import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scolarite',
  templateUrl: './scolarite.component.html',
  styleUrls: ['./scolarite.component.scss']
})
export class ScolariteComponent implements OnInit {

  public currentActive = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStudients(){
    this.currentActive = 1
  }

  onCours(){
    this.currentActive = 2
  }

  onClasses(){
    this.currentActive = 3
  }

  onProgrammes(){
    this.currentActive = 4
  }


  onInscription(){
    this.currentActive = 5
  }

  onUsers(){
    this.currentActive = 7
  }

}
