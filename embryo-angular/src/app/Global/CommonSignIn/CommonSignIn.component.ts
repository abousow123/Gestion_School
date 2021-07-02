import { Router } from '@angular/router';
import { AuthenticationService } from './../../Services/authentication.service';
import { UserLogin } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'embryo-SignIn',
  templateUrl: './CommonSignIn.component.html',
  styleUrls: ['./CommonSignIn.component.scss']
})
export class CommonSignInComponent implements OnInit {

  userForm: any;
  validatingForm: FormGroup;
  login: any;
  password: any;
  userLogin: UserLogin = new UserLogin();

  codeError: number = 0 ;

  

  constructor(private formBuilder: FormBuilder,private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    /* this.userForm = this.formBuilder.group({
      login:(['', Validators.required, Validators.email]),
      password:(['', Validators.required]),

    }); */

    this.login = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    this.password = new FormControl('', [
      Validators.required,
    ]);

    this.userForm = new FormGroup({
      login: new FormControl(['', Validators.required, Validators.email]),
      password: new FormControl(['', Validators.required]),
    });



  }

  testButton(){
    this.userLogin.login = this.login.value ;
    this.userLogin.password = this.password.value ;
    console.log("login: "+this.login.value + ", Pass: "+this.password.value);

    this.authService.login(this.userLogin)
    .subscribe(resp=>{

      let jwt = resp.headers.get('Authorization') ;

      this.authService.saveToken(jwt) ;
      
      this.router.navigateByUrl("/home-two")

      this.codeError = 0 ;

    },err =>{

      this.codeError = 1 ;
    //  this.mode = 1 ;
    }
    )
    
  }

}
