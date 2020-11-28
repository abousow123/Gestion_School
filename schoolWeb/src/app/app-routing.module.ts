import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './views/etudiant/etudiant.component';
import { TuitionComponent } from './views/tuition/tuition.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { ClasseComponent } from './views/classe/classe.component';
import { CoursComponent } from './views/cours/cours.component';
import { ProgrammeComponent } from './views/programme/programme.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'etudiant', component: EtudiantComponent },
{ path: 'classe', component: ClasseComponent },
{ path: 'tuition', component: TuitionComponent },
{ path: 'programme', component: ProgrammeComponent },
{ path: 'cours', component: CoursComponent },
{ path: 'inscription', component: InscriptionComponent },

 { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
