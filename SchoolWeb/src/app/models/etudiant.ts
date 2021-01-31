import { Programme } from './programme';
import { Classe } from './classe';
import {Tuteur}  from "./tuteur" ;


export class Etudiant{

    constructor(){}

    id: string = '' ;
    numStudent: string;
    firstName:string;
    lastName: string;
    address: string;
    dateNaissance: Date;
    nationalite: string;
    tel: string;
    email: string;
    photo: string;
    fraisInscription: number;
    feesPays: boolean;
    tuteur: Tuteur = new Tuteur();

}


export class Inscription{
  constructor(){} ;

  id: string = '' ;
  dateInscrit: Date;
  classe: Classe = new Classe();
  etudiant: Etudiant = new Etudiant();
  programme: Programme = new Programme();

}
