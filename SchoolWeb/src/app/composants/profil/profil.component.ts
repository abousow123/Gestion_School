import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  public currentActive = 1;

  constructor() { }

  ngOnInit(): void {
  }

  onStudients(){
    this.currentActive = 1
  }

  onInfos(){
    this.currentActive = 2

  }

  onChangePass(){
    this.currentActive = 1

  }

}
