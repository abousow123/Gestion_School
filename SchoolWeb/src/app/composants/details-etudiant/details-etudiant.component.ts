import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/models/etudiant';
import { Tuteur } from 'src/app/models/tuteur';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.scss']
})
export class DetailsEtudiantComponent implements OnInit {

  detailEtudiant: Etudiant = new Etudiant();
  detailTuteur: Tuteur = new Tuteur() ;
  id:string = "" ;
  private state$: Observable<object> ;
  currentActive:number = 0 ;

  constructor(private activeRoute: ActivatedRoute,private etudiantService: SchoolService, private router: Router) { }

  ngOnInit(): void {
     this.id = this.activeRoute.snapshot.params['ref'] ;

    this.etudiantService.getOneStudent(this.id)
    .subscribe(data=>{
      this.detailEtudiant = data as Etudiant ;
      this.detailTuteur = this.detailEtudiant.tuteur ;
      console.log("detail 1 ======> "+ JSON.stringify(this.detailTuteur));


    },err=>{
      console.log(err);

    }) ;

  /*   this.etudiantService.getTuteur(JSON.stringify(this.detailEtudiant))
    .subscribe(data=>{
      this.detailTuteur = data as Tuteur ;
      console.log("detail 2======> "+this.detailTuteur);


    },err=>{
      console.log(err);

    }) */




  }

  onStudients(){

  }

}
