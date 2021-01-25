import { Programme } from './programme';
export class Cours{
    code: string = "";
    date_cours: Date;
    heureDebut: Date;
    heureFin: Date;
    libelle: string = "" ;
    description: string = "" ;
    programme: Programme = new Programme() ;
}
