import { environment } from './../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {
  host = environment.url ;

  private jwtToken = null ;
  constructor(private http: HttpClient, private autService: AuthenticationService) { }


  // Etudiant =====================================================================>>>>>

  getEtudiants(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken() ;
    return this.http.get(this.host+ "listEtudiants", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getOneStudent(idStudient){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "etudiant/"+idStudient, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveEtudiant(etudiant){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveEtudiant",etudiant, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  editEtudiant(id: string, etudiant){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.put(this.host+ "editEtudiant/"+id,etudiant, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }



  getEtudiantsByFilter(data){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken() ;
    return this.http.get(this.host+ "listEtudiantsByFilter", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }



   // Tuteur =====================================================================>>>>>

  getTuteur(etudiant){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(etudiant._links.tuteur.href, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  saveTuteur(tuteur){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "tuteurs",tuteur, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getTuitions(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "tuitions", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }



     // Tuteur =====================================================================>>>>>

  getOneProgramme(id:number){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "programmes/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }
  getProgrammes(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "programmes", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }
  saveProgramme(programme){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveProgramme",programme, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  deleteProgramme(id){
    return this.http.delete(id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  editProgramme(id: number, programme){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.put(this.host+ "updateProgramme/"+id,programme, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }


   // Classe =====================================================================>>>>>

  getOneClasse(id: number){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "classes/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getClasses(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "classes", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  saveClasse(tuteur){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveClasse",tuteur, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  deleteClasse(id){
    return this.http.delete(id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  editClasse(id: number, classe){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.put(this.host+ "editClasse/"+id,classe, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  // Cours =====================================================================>>>>>

  getCours(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "listCours", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getPostCours(data){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveCours",data, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  deleteCours(id){
    return this.http.delete(this.host+ "courses/"+ id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  editCours(id: number, cours){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.put(this.host+ "updateCours/"+id,cours, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }


   // Users =====================================================================>>>>>

  getUsers(){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "listUsers", {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }
  getOneUser(id){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "users/"+id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
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
  saveUser(user){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveUser",user, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }
  deleteUser(id){
    return this.http.delete(this.host+ "agentUsers/"+ id, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }
  editUser(id: string, user){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.put(this.host+ "userUpdate/"+id,user, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  removeRole(formData){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "removeRole",formData, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }


     // Inscription =====================================================================>>>>>

  postInscription(inscription){
      if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
      return this.http.post(this.host+ "saveInscription",inscription, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  getInscriptionByStudent(idStudient){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.get(this.host+ "inscription/"+idStudient, {headers: new HttpHeaders({'Authorization': this.jwtToken})});
  }

  editInscription(id: number, inscription){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.put(this.host+ "updateInscription/"+id,inscription, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }


  postAgenda(agenda){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveAgenda",agenda, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }


  saveGallery(gallery){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "saveGallery",gallery, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

  savePicture(picture){
    if(this.jwtToken == null) this.jwtToken = this.autService.loadToken()  ;
    return this.http.post(this.host+ "savePicture",picture, {headers: new HttpHeaders({'Authorization': this.jwtToken})}) ;
  }

}
