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

  constructor(private fb: FormBuilder) {

  this.contactForm = fb.group({
    'contactFormName': ['', Validators.required],
    'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
    'contactFormSubjects': ['', Validators.required],
    'contactFormMessage': ['', Validators.required],
    'contactFormCopy': [''],
    });
  }

  ngOnInit(): void {
  }


  onSubmit() {
    /* this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    }); */
  }


}
