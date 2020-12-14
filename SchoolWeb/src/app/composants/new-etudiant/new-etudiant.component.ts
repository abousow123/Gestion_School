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
  detailEtudiant: Etudiant = new Etudiant();

  isLinear = false;
  isEditable = false;
  pay: string = '';
  op: number = 3 ;
  optionPay= [
    {value: "Debit card"},
    {value: "Credit cards"},
    {value: "Paypal"},
    {value: "Cash"}
  ] ;

  

  etudiantForm: FormGroup;
  cardFormGroup: FormGroup;
  isOptional = false;
  selected = 'option2';
  typePay: string = '';


  constructor(private _formBuilder: FormBuilder,private etudiantService: SchoolService) {}

  ngOnInit() {
    this.cardFormGroup = this._formBuilder.group({
      cardNumber: [''],
      expiratyDate: [''],
      cvv: ['', ],
      firstCtrl: ['']
    });

    this.etudiantForm = this._formBuilder.group({
      firstName:([this.etudiant.firstName, Validators.required]),
      lastName:([this.etudiant.lastName, Validators.required]),
      address:([this.etudiant.address, Validators.required]),
      nationalite:([this.etudiant.nationalite, Validators.required]),
      tel:([this.etudiant.tel, Validators.required]),
      email:([this.etudiant.email,Validators.email]),
      firstNameTuteur: ([this.tuteur.nom]),
      lastNameTuteur: ([this.tuteur.prenom]),
      telTuteur: ([this.tuteur.tel]),
      emailTuteur: ([this.tuteur.email]),
      typeTuteur: ([this.tuteur.typeTuteur]),
    });
  
  }

  get f() { return this.etudiantForm.controls; }

  saveEtudiant(etudiantForm: FormGroup){

    this.etudiant.firstName = etudiantForm.value.firstName;
    this.etudiant.lastName = etudiantForm.value.lastName;
    this.etudiant.address = etudiantForm.value.address;
    this.etudiant.nationalite = etudiantForm.value.nationalite;
    this.etudiant.tel = etudiantForm.value.tel;
    this.etudiant.email = etudiantForm.value.email;

    this.tuteur.nom = etudiantForm.value.firstNameTuteur;
    this.tuteur.prenom = etudiantForm.value.lastNameTuteur;
    this.tuteur.tel = etudiantForm.value.telTuteur;
    this.tuteur.email = etudiantForm.value.emailTuteur;
    this.tuteur.typeTuteur = etudiantForm.value.typeTuteur ;

    this.etudiant.tuteur = this.tuteur ;
    
    this.etudiantService.saveEtudiant(this.etudiant)
    .subscribe(
      response => {
        this.detailEtudiant = response as Etudiant ;
        console.log("Reurn Etudiant: ======> "+JSON.stringify(this.detailEtudiant));
      }
    );
    
  }

  onOption(){
    this.op = 3
    if(this.cardFormGroup.value.firstCtrl =='Cash'){
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
