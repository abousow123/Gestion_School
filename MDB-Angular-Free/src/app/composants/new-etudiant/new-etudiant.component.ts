import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';
import { Tuteur } from 'src/app/models/tuteur';
import { SchoolService } from 'src/app/services/school.service';

@Component({
  selector: 'app-new-etudiant',
  templateUrl: './new-etudiant.component.html',
  styleUrls: ['./new-etudiant.component.scss']
})
export class NewEtudiantComponent implements OnInit {


  


  etudiant: Etudiant = new Etudiant() ;
  tuteur: Tuteur = new Tuteur();


  firstFormGroup: FormGroup;
  //secondFormGroup: FormGroup;
  isEditable = false;
  pay: string = '';
  op: number ;
  optionPay= [
    {value: "Debit card"},
    {value: "Credit cards"},
    {value: "Paypal"},
    {value: "Cash"}
  ]

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
      email:([this.etudiant.email, Validators.required]),
      firstNameTuteur: ([this.tuteur.nom]),
      lastNameTuteur: ([this.tuteur.prenom]),
      telTuteur: ([this.tuteur.tel]),
      emailTuteur: ([this.tuteur.email]),
      typeTuteur: ([this.tuteur.typeTuteur]),
    });
  
  }

  saveEtudiant(etudiantForm: FormGroup){
    this.etudiant.firstName = this.etudiantForm.value.firstName;
    this.etudiant.lastName = this.etudiantForm.value.lastName;
    this.etudiant.address = this.etudiantForm.value.address;
    this.etudiant.nationalite = this.etudiantForm.value.nationalite;
    this.etudiant.tel = this.etudiantForm.value.tel;
    this.etudiant.email = this.etudiantForm.value.email;

    this.tuteur.nom = this.etudiantForm.value.firstNameTuteur;
    this.tuteur.prenom = this.etudiantForm.value.lastNameTuteur;
    this.tuteur.tel = this.etudiantForm.value.telTuteur;
    this.tuteur.email = this.etudiantForm.value.emailTuteur;

    console.log(" Test Tutteur ++++++++++++++++++++++++++"+ this.tuteur);

    this.etudiantService.saveTuteur(this.tuteur)
    .subscribe(
      response => {
        this.etudiant.tuteur = response as Tuteur ;
        console.log("Test etudiant tuteur "+this.etudiant.tuteur);
      }
    );

    //this.etudiant.tuteur = this.tuteur ;
    
    this.etudiantService.saveEtudiant(this.etudiant)
    .subscribe(
      response => {
        this.etudiant = response as Etudiant ;
        console.log("test Etudiant ===================================="+this.etudiant.firstName);
      }
    );
    
  }

  onOption(){
    this.op = 3
    if(this.pay =='Cash'){
      this.op = 1
    }else{
      this.op = 0
    }
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
       // this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

}
