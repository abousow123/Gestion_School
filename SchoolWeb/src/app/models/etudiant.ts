import { from } from 'rxjs';
import { Tuitions } from './tuition';

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
    tuteur: Tuteur = new Tuteur() ;
}
