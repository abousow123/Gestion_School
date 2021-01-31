import { Classe } from './../../models/classe';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Etudiant, Inscription } from 'src/app/models/etudiant';
import { Programme } from 'src/app/models/programme';
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

  programmes: any ;
  classes: any;
  resp: any ;
  idProgramme: number = 0;
  idClasse: number;
  programme: Programme = new Programme();
  classe: Classe = new Classe();

  selected = 'option2';

  inscrit: Inscription = new Inscription();



  constructor(private activeRoute: ActivatedRoute,private etudiantService: SchoolService, private router: Router) { }

  ngOnInit(): void {

    this.id = this.activeRoute.snapshot.params['ref'] ;

    this.etudiantService.getOneStudent(this.id)
    .subscribe(data=>{
      this.detailEtudiant = data as Etudiant ;
      this.detailTuteur = this.detailEtudiant.tuteur ;
      this.getInscriptionByStudent(this.detailEtudiant.id);

    },err=>{
      console.log(err);

    }) ;

    this.getProgrammes();
    this.getClasses();

  }

  onStudients(){

  }

  onPayFees(){

    this.detailEtudiant.feesPays = true ;
    this.etudiantService.editEtudiant(this.detailEtudiant.id,this.detailEtudiant)
    .subscribe(data=>{
      this.detailEtudiant = data as Etudiant ;
      this.router.navigate(['settings/detailEtudiant', this.detailEtudiant.id]) ;
    },err=>{
      console.log(err);

    }) ;
  }

  getOneProgramme(){
    console.log("test select"+ this.selected);

    this.etudiantService.getOneProgramme(this.idProgramme)
    .subscribe(data =>{
      this.resp = data;

      this.programme.code_programme = this.resp.code_programme;
      this.programme.libelle = this.resp.libelle ;
      this.programme.prix = this.resp.prix ;
      this.programme.dropOff = this.resp.dropOff ;
      this.programme.id = this.resp.id ;

    },err=>{
      console.log(err);

    });
  }

  getOneClasse(){
    this.etudiantService.getOneClasse(this.idClasse)
    .subscribe(data =>{
      this.resp = data;

      this.classe.id = this.resp.id ;
      this.classe.code = this.resp.code;
      this.classe.libelle = this.resp.libelle ;
      this.classe.nbre_max_etudiant = this.resp.nbre_max_etudiant ;

    },err=>{
      console.log(err);

    });
  }

  getProgrammes(){
    this.etudiantService.getProgrammes()
    .subscribe(data =>{
      this.resp = data;
      this.programmes = this.resp._embedded.programmes;

    },err=>{
      console.log(err);

    });
  }

  getClasses(){
    this.etudiantService.getClasses()
    .subscribe(data =>{
      this.resp = data;
      this.classes = this.resp._embedded.classes;
    },err=>{
      console.log(err);

    });
  }

  postInscription(){

    const formData = new FormData() ;

    formData.append('etudiant', JSON.stringify(this.detailEtudiant))
    formData.append('classe', JSON.stringify(this.classe))
    formData.append('programme', JSON.stringify(this.programme))

    this.etudiantService.postInscription(formData)
    .subscribe(data =>{
      this.resp = data;
      this.inscrit = this.resp ;


    },err=>{
      console.log(err);

    });
  }

  getInscriptionByStudent(idStudent){

    this.etudiantService.getInscriptionByStudent(idStudent)
    .subscribe(data =>{
      this.resp = data;
      this.inscrit = this.resp;
      //this.programme.prix = this.inscrit.programme.prix;

    },err=>{
      console.log(err);
    });
  }


}
