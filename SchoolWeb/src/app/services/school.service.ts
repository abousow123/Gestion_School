import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  host = environment.url

  private jwtToken = null ;
  constructor(private http: HttpClient, private autService: AuthenticationService) { }



  getEtudiants(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken() ;
    return this.http.get(this.host+ "etudiants", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getOneStudent(idStudient){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "etudiant/"+idStudient, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  getTuteur(etudiant){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(etudiant._links.tuteur.href, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveEtudiant(etudiant){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveEtudiant",etudiant, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  saveTuteur(tuteur){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "tuteurs",tuteur, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getTuitions(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "tuitions", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getProgrammes(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "programmes", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getClasses(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "classes", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getCours(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "courses", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }


  getUsers(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "agentUsers", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getRoles(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "roles", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getRolesUser(user){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(user._links.roles.href, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getRole(id){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+"roles/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  saveUser(user:User){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveUser",user, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  deleteUser(id){
    return this.http.delete(id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }


}
