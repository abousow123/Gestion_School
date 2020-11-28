import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

  host = environment.url

  constructor(private http: HttpClient) { }

  getEtudiants(){
    return this.http.get(this.host+"/etudiants");
  }


}
