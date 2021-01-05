import { SchoolService } from 'src/app/services/school.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User, UserLogin } from './models/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

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
  validatingForm: FormGroup;
  user: User = new User();
  userLogin: UserLogin = new UserLogin();
  mode: number = 0 ;
  codeError: number = 0 ;


  constructor(private schoolService: SchoolService,public authService: AuthenticationService, private router: Router,
    private _formBuilder: FormBuilder, private _snackBar: MatSnackBar){}
  ngOnInit() {

    this.userForm = this._formBuilder.group({
      login:([this.user.login, Validators.required]),
      password:([this.user.password, Validators.required]),

    });

    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });

  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  onLogin(){
    this.userLogin.login = this.validatingForm.value.loginFormModalEmail;
    this.userLogin.password = this.validatingForm.value.loginFormModalPassword

    this.authService.login(this.userLogin)
    .subscribe(resp=>{

      let jwt = resp.headers.get('Authorization') ;

      this.authService.saveToken(jwt) ;
      this.mode = 0;
      this.username = 1 ;
      this.isEmployer() ;

      this._snackBar.open(this.authService.isuserName(), ', vous etes connecté avec succés !!!', {
        duration: 3000,
      });

      this.validatingForm = new FormGroup({
        loginFormModalEmail: new FormControl(this.userLogin.login, Validators.email),
        loginFormModalPassword: new FormControl('', Validators.required)
      });
      this.codeError = 0 ;

    },err =>{

      this.codeError = 1 ;
      this.mode = 1 ;
    }
    )
  }

  onHome(){
    this.mode = 0 ;
    this.router.navigateByUrl('/home') ;
  }
  onRegister(){
    this.mode = 0 ;
    this.router.navigateByUrl('/newEtudiant') ;
  }
  onGallery(){
    this.mode = 0 ;
    this.router.navigateByUrl('/home') ;
  }
  onAbout(){
    this.mode = 0 ;
    this.router.navigateByUrl('/about') ;
  }
  onAppointment(){
    this.mode = 0 ;
    this.router.navigateByUrl('/agenda') ;
  }



  onLogout(){
     this.authService.logout();
     this.mode = 0;
     this.username = 0 ;
     this.admin = 0 ;
     this.router.navigateByUrl('/home') ;
     this._snackBar.open(this.authService.isuserName(), ', vous etes déconnecté avec succés !!!', {
      duration: 3000,
    });
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
