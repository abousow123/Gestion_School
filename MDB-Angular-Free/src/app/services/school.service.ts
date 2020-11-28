import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  host = environment.url

  constructor(private http: HttpClient) { }

  getEtudiants(){
    return this.http.get(this.host+ "etudiants") ;
  }

  saveEtudiant(etudiant){
    return this.http.post(this.host+ "etudiants",etudiant) ;
  }

  saveTuteur(tuteur){
    return this.http.post(this.host+ "tuteurs",tuteur) ;
  }

  getTuitions(){
    return this.http.get(this.host+ "tuitions") ;
  }

  getProgrammes(){
    return this.http.get(this.host+ "programmes") ;
  }

  getClasses(){
    return this.http.get(this.host+ "classes") ;
  }

  getCours(){
    return this.http.get(this.host+ "cours") ;
  }


}
