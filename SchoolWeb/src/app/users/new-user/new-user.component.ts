import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;
  user: User = new User();

  model: string = '';
  roles: any;
  r:any;

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];



  constructor(private schoolService: SchoolService,private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.userForm = this._formBuilder.group({
      firstName:([this.user.firstName, Validators.required]),
      lastName:([this.user.lastName, Validators.required]),
      password:([this.user.password,Validators.required]),
      login:([this.user.login,Validators.required]),
      confirmPassword:(['',Validators.required]),
      activeUser:([this.user.userActive,Validators.required]),
      authority:([this.user.role.authority,Validators.required])
    });

    this.schoolService.getRoles()
    .subscribe(
      response => {
        this.r = response  ;
        this.roles = this.r._embedded.roles
        console.log("Reurn Etudiant: ======> "+JSON.stringify(this.roles));
      }
    );

  }

  OnSave(){

  }

}
