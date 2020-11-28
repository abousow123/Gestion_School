import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './views/etudiant/etudiant.component';
import { CountryService } from './views/etudiant/countri.service';
import { TuitionComponent } from './views/tuition/tuition.component';
import { InscriptionComponent } from './views/inscription/inscription.component';
import { ClasseComponent } from './views/classe/classe.component';
import { CoursComponent } from './views/cours/cours.component';
import { ProgrammeComponent } from './views/programme/programme.component';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdSortableHeader } from './views/etudiant/sortable.country';
import {EtudiantService} from './services/etudiant/etudiant.service';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import {ScrollingModule} from '@angular/cdk/scrolling';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EtudiantComponent,
    TuitionComponent,
    InscriptionComponent,
    ClasseComponent,
    CoursComponent,
    ProgrammeComponent,
    NgbdSortableHeader
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatPaginator,
    MatTableModule,
    NgbModule,
    NgbPaginationModule,
    ScrollingModule
  ],
  providers: [
    CountryService,
    DecimalPipe,
    EtudiantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
