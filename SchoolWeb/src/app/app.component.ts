import { SchoolService } from 'src/app/services/school.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "Nay’s hair braiding";

  admin: number = 0 ;
  username: number = 0 ;
  userForm: FormGroup;
  user: User = new User();
  mode: number = 0 ;


  constructor(private schoolService: SchoolService,public authService: AuthenticationService, private router: Router,private _formBuilder: FormBuilder){}
  ngOnInit() {

    this.userForm = this._formBuilder.group({
      login:([this.user.login, Validators.required]),
      password:([this.user.password, Validators.required]),

    });
  /*   this.isAdmin() ;
    this.isUserName() ; */
  }

  onLogin(userForm){
    this.authService.login(userForm)
    .subscribe(resp=>{
      let jwt = resp.headers.get('Authorization') ;
      this.authService.saveToken(jwt) ;
      this.mode = 0;
      this.username = 1 ;
      this.isEmployer() ;
    },err =>{
      this.mode = 1 ;
    }
    )
  }



  onLogout(){
     this.authService.logout();
     this.mode = 0;
     this.username = 0 ;
     this.admin = 0 ;
     this.router.navigateByUrl('/home') ;
  }

  login(){
    this.authService.logout();
    this.mode = 1 ;
  }



  isEmployer(){
      if(this.authService.isEmployer() == true)  this.admin = 1 ;
      else this.admin = 0 ;

  }

  isUserName(){
    if(this.authService.isuserName() === ""){
       this.username = 0;
    }
    else{
      this.username = 1 ;
    }

  }


}
