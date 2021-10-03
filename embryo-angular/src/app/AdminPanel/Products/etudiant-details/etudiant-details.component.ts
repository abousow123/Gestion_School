import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/Services/school.service';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {
  id: string = '';
  choix: string = "informations";
  etudiant?: any;
  detailTuteur: any;
  inscrit= false;

  constructor(private activeRoute: ActivatedRoute, private schoolService: SchoolService) { }

  ngOnInit(): void {
    this.id = this.activeRoute.snapshot.params['num'] ;

    this.schoolService.getOneStudent(this.id)
    .subscribe(data=>{
      this.etudiant = data ;
      this.detailTuteur = this.etudiant.tuteur;
      
    },err=>{
      console.log(err);

    }) ;
    
  }

  infos(){
    this.choix = "informations" ;
  }
  ref(){
    this.choix = "reference" ;
  }
  register(){
    this.choix = "register" ;
  }

  addNewUserDialog(){}

}
