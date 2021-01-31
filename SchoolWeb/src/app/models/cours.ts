import { Programme } from './programme';
export class Cours{
    id: number;
    code: string = "";
    date_cours: Date;
    heureDebut: Date;
    heureFin: Date;
    libelle: string = "" ;
    description: string = "" ;
    file: string = "";
    programme: Programme = new Programme() ;
}
