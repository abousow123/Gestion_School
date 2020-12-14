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

  getOneStudent(idStudient){
    return this.http.get(this.host+ "etudiant/"+idStudient);
  }

  getTuteur(etudiant){
    
    return this.http.get(etudiant._links.tuteur.href);
  }

  saveEtudiant(etudiant){
    
    return this.http.post(this.host+ "saveEtudiant",etudiant) ;
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
    return this.http.get(this.host+ "courses") ;
  }


  getUsers(){
    return this.http.get(this.host+ "users") ;
  }

  getRoles(){
    return this.http.get(this.host+ "roles") ;
  }

  saveUser(user){
    return this.http.post(this.host+ "users",user) ;
  }


}
