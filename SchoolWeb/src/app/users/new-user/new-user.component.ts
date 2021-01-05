import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Role, User } from 'src/app/models/user';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();
  role: Role = new Role();

  model: string = '';
  roles: any;
  r:any;




  constructor(private schoolService: SchoolService,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      firstName:([this.user.firstName, Validators.required]),
      lastName:([this.user.lastName, Validators.required]),
      password:([this.user.password,Validators.required]),
      login:([this.user.login,Validators.required]),
      confirmPassword:(['',Validators.required]),
      activeUser:([this.user.userActive,Validators.required]),
      authority:(['',Validators.required])
    });

    this.schoolService.getRoles()
    .subscribe(
      response => {
        this.r = response  ;
        this.roles = this.r._embedded.roles
      },err=>{
        console.log(err);
      }
    );

  }

  OnSave(){
    this.user.firstName = this.userForm.value.firstName ;
    this.user.lastName = this.userForm.value.lastName ;
    this.user.login = this.userForm.value.login;
    this.user.password = this.userForm.value.password ;
    this.user.userActive = this.userForm.value.activeUser ;

    this.schoolService.getRole(parseInt(this.userForm.value.authority))
    .subscribe(
      response => {
        this.role = response as Role  ;

       // this.user.roles = this.role ;
        this.schoolService.saveUser(this.user)
        .subscribe(resp => {
          this.user = resp as User ;
          console.log("User return ========>"+JSON.stringify(this.user));

        },err=>{
          console.log(err);
        })
      },err=>{
        console.log(err);
      }
    );





  }

  test(){
   // console.log("test id ===> "+ this.userForm.value.authority);

  }

}
