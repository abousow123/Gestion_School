import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-new-cours',
  templateUrl: './new-cours.component.html',
  styleUrls: ['./new-cours.component.scss']
})
export class NewCoursComponent implements OnInit {

  firstFormGroup: FormGroup;
  //secondFormGroup: FormGroup;
  isEditable = false;

  etudiant: Etudiant = new Etudiant() ;

  etudiantForm: FormGroup;
  secondFormGroup: FormGroup;
  isOptional = false;

  constructor(private _formBuilder: FormBuilder,private etudiantService: SchoolService) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.etudiantForm = this._formBuilder.group({
      firstName:([this.etudiant.firstName, Validators.required]),
      lastName:([this.etudiant.lastName, Validators.required]),
      address:([this.etudiant.address, Validators.required]),
      nationalite:([this.etudiant.nationalite, Validators.required]),
      tel:([this.etudiant.tel, Validators.required]),
      email:([this.etudiant.email, Validators.required])
    });

  }

  saveEtudiant(etudiantForm: FormGroup){
    this.etudiant.firstName = this.etudiantForm.value.firstName;
    this.etudiant.lastName = this.etudiantForm.value.lastName;
    this.etudiant.address = this.etudiantForm.value.address;
    this.etudiant.nationalite = this.etudiantForm.value.nationalite;
    this.etudiant.tel = this.etudiantForm.value.tel;
    this.etudiant.email = this.etudiantForm.value.email;

    console.log("===================================="+this.etudiant.address);

    this.etudiantService.saveEtudiant(this.etudiant)
    .subscribe(
      response => {
        console.log(response);
      }
    );
    
  }

}
