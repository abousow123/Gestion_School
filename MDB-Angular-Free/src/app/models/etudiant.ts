import { from } from 'rxjs';
import { Tuitions } from './tuition';

import {Tuteur}  from "./tuteur" ;

export class Etudiant{

    constructor(){}

    firstName:string;
    lastName: string;
    address: string;
    dateNaissance: Date;
    nationalite: string;
    tel: string;
    email: string;
    fraisInscription: number;
    tuteur: Tuteur = new Tuteur() ;
}