
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './composants/etudiant/etudiant.component';
import { NewEtudiantComponent } from './composants/new-etudiant/new-etudiant.component';
import { RouterModule, Routes } from '@angular/router';
import { TuitionComponent } from './composants/tuition/tuition.component';
import { ProgrammeComponent } from './composants/programme/programme.component';
import { NewTuitionComponent } from './composants/new-tuition/new-tuition.component';
import { ClasseComponent } from './composants/classe/classe.component';
import { CoursComponent } from './composants/cours/cours.component';
import { NewCoursComponent } from './composants/new-cours/new-cours.component';
import { from } from 'rxjs';
import {MaterialModule} from './material/material.module'
import { WavesModule } from 'angular-bootstrap-md';
import { AboutComponent } from './composants/about/about.component';
import { GalleryComponent } from './composants/gallery/gallery.component'


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'etudiant', component: EtudiantComponent },
  { path: 'newEtudiant', component: NewEtudiantComponent },
  { path: 'tuition', component: TuitionComponent },
  { path: 'programme', component: ProgrammeComponent },
  { path: 'classe', component: ClasseComponent },
  { path: 'cours', component: CoursComponent },
  { path: 'newCours', component: NewCoursComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  /* 
  { path: 'inscription', component: InscriptionComponent }, */
  
   { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EtudiantComponent,
    NewEtudiantComponent,
    TuitionComponent,
    ProgrammeComponent,
    NewTuitionComponent,
    ClasseComponent,
    CoursComponent,
    NewCoursComponent,
    AboutComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    WavesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
