import { ActivatedRoute } from '@angular/router';
import { SchoolService } from 'src/app/services/school.service';
import { Role, User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  user: User = new User();
  id: String = '';

  userForm: FormGroup;
  role: Role = new Role();

  model: string = '';
  roles1: any;
  r:any;

  authority: number = 2;


  myForm: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(private etudiantService: SchoolService,private activateRoute: ActivatedRoute, private _formBuilder: FormBuilder,private formBuilder: FormBuilder) {

    this.myForm = this.formBuilder.group({
      password: ['', [Validators.required]],
      confirm_password: ['', [Validators.required]]
    }, {
      validator: ConfirmedValidator('password', 'confirm_password')
    })
  }

  get f(){
    return this.myForm.controls;
  }

  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  let pass = group.controls.password.value;
  let confirmPass = group.controls.confirmPassword.value;

  return pass === confirmPass ? null : { notSame: true }
}

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'] ;

    this.etudiantService.getOneUser(this.id)
    .subscribe(data=>{
      this.user = data as User;

    },err=>{
      console.log(err);

    }) ;

    this.etudiantService.getRoles()
    .subscribe(
      response => {
        this.r = response  ;
        this.roles1 = this.r._embedded.roles
      },err=>{
        console.log(err);
      }
    );

    this.userForm = this._formBuilder.group({
      firstName:([this.user.firstName, Validators.required]),
      lastName:([this.user.lastName, Validators.required]),
      password:([this.user.password,Validators.required]),
      login:([this.user.login,Validators.required]),
      confirmPassword:(['',Validators.required]),
      activeUser:([this.user.userActive,Validators.required]),
      tel:([this.user.tel,Validators.required])
    });
  }

  onRemove(el){

    const formData = new FormData() ;
    console.log("test 1");

    formData.append('role', JSON.stringify(el));
    formData.append('agentUser',JSON.stringify(this.user)) ;

    this.etudiantService.removeRole(formData)
    .subscribe(data=>{
      this.user = data as User;
      console.log("test 2");

    },err=>{
      console.log(err);

    }) ;


  }

  activedUser(){
    this.user.userActive = true;
    this.etudiantService.editUser(this.user.id,this.user)
    .subscribe(data=>{
      this.user = data as User;

    },err=>{
      console.log(err);

    }) ;
  }

  deactivedUser(){
    this.user.userActive = false;
    this.etudiantService.editUser(this.user.id,this.user)
    .subscribe(data=>{
      this.user = data as User;

    },err=>{
      console.log(err);

    }) ;
  }

  addRole(){
    this.etudiantService.getRole(this.authority)
    .subscribe(
      response => {
        this.role = response as Role  ;

        if(this.user.roles.some(code => code.authority === this.role.authority) == false){

          this.user.roles.push(this.role);

          this.etudiantService.editUser(this.user.id,this.user)
          .subscribe(resp => {
            this.user = resp as User ;
          },err=>{
            console.log(err);
          }) ;

        }

      },err=>{
        console.log(err);
      }
    );

  }

  updateUserForm(){
    this.userForm.setValue(
      {
       firstName:this.user.firstName,
       lastName:this.user.lastName,
       login:this.user.login,
       tel:this.user.tel,
       password:this.user.password,
       confirmPassword:'',
       activeUser:this.user.userActive
      }

    );
  }

  updateContactUser(){
    this.user.firstName = this.userForm.value.firstName ;
    this.user.lastName = this.userForm.value.lastName ;
    this.user.login = this.userForm.value.login;
    this.user.tel = this.userForm.value.tel;

    this.etudiantService.editUser(this.user.id,this.user)
    .subscribe(resp => {
      this.user = resp as User ;
    },err=>{
      console.log(err);
    }) ;

  }

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}


export function ConfirmedValidator(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ confirmedValidator: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

