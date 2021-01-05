import { Programme } from './../../models/programme';
import { SchoolService } from './../../services/school.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {


contactForm: FormGroup;
disabledSubmitButton: boolean = true;
optionsSelect: Array<any>;
etudiant: Etudiant ;

detailEtudiant: Etudiant = new Etudiant();

  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  programmes: any ;
  classes: any;
  resp: any ;
  idProgramme: number;
  programme: Programme ;

  p = 0;


  constructor(private fb: FormBuilder,private schoolService: SchoolService) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }

  ngOnInit(): void {


    this.getProgrammes();
    this.getClasses();


  }


  onSubmit() {
    this.p = 20;
    /* this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    }); */
  }

  getProgrammes(){
    this.schoolService.getProgrammes()
    .subscribe(data =>{
      this.resp = data;
      this.programmes = this.resp._embedded.programmes;
    },err=>{
      console.log(err);

    });
  }

  getClasses(){
    this.schoolService.getClasses()
    .subscribe(data =>{
      this.resp = data;
      this.classes = this.resp._embedded.classes;
    },err=>{
      console.log(err);

    });
  }



}
