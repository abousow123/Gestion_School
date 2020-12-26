import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../models/user';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  userForm: FormGroup;
  user: User = new User();
  mode: number = 0 ;
  constructor(private _formBuilder: FormBuilder,private autService: AuthenticationService,private router: Router) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      login:([this.user.login, Validators.required]),
      password:([this.user.password, Validators.required]),

    });
  }

  onLogin(userForm){
    this.autService.login(userForm)
    .subscribe(resp=>{
      let jwt = resp.headers.get('Authorization') ;
      this.autService.saveToken(jwt) ;
      this.router.navigateByUrl('/home');
    },err =>{
      this.mode = 1 ;
    }
    )


  }

}
