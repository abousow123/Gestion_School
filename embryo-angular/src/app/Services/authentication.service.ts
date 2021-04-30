

import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private host = environment.url;
  private roles: Array<any>  ;
  private jwtToken = null ;
  private userName: string = "" ;


  constructor(private http:HttpClient,private jwtHelper: JwtHelperService) {
  }

  login(user){
    return this.http.post(this.host+"login",user,{observe:'response'}) ;
  }

  saveToken(jwt:string){
    localStorage.setItem('token',jwt) ;
    this.jwtToken = jwt ;
    this.roles = this.jwtHelper.decodeToken(this.jwtToken).roles ;
    this.userName = this.jwtHelper.decodeToken(this.jwtToken).sub ;


  }

  loadToken(){
    this.jwtToken = localStorage.getItem('token') ;
    return this.jwtToken ;
  }

  logout(){
    this.jwtToken = null ;
    localStorage.removeItem('token') ;
  }

  isAdmin(){
    if(this.roles != null){
      for(let r of this.roles){
        if(r=='Admin') return true ;

      }
      return false ;
    }
  }

  isEmployer(){
    this.jwtToken = this.loadToken() ;

    if(this.jwtToken){
      this.roles = this.jwtHelper.decodeToken(this.jwtToken).roles ;
      if(this.roles != null){
        for(let r of this.roles){
          if(r=='Admin' || r == 'User') return true ;

        }
        return false ;
      }
    }


  }

  isuserName(){
    this.jwtToken = this.loadToken() ;
    if(this.jwtToken!=null){
      this.userName = this.jwtHelper.decodeToken(this.jwtToken).sub ;
      return this.userName ;
    }else{
      return "";
    }

  }

}
