import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { InputUtilitiesModule, MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { EtudiantComponent } from './composants/etudiant/etudiant.component';
import { NewEtudiantComponent } from './composants/new-etudiant/new-etudiant.component';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammeComponent } from './composants/programme/programme.component';
import { NewTuitionComponent } from './composants/new-tuition/new-tuition.component';
import { ClasseComponent } from './composants/classe/classe.component';
import { CoursComponent } from './composants/cours/cours.component';
import { NewCoursComponent } from './composants/new-cours/new-cours.component';
import {MaterialModule} from './material/material.module'
import { CheckboxModule,WavesModule, ButtonsModule, InputsModule, IconsModule, CardsModule,ModalModule, TooltipModule, PopoverModule, } from 'angular-bootstrap-md';
import { AboutComponent } from './composants/about/about.component';
import { DetailsEtudiantComponent } from './composants/details-etudiant/details-etudiant.component';
import { UserComponent } from './users/user/user.component';
import { NewUserComponent } from './users/new-user/new-user.component';
import { LoginComponent } from './login/login.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { GalleryModule } from 'ng-gallery';
import { LightboxModule } from 'ngx-lightbox';
import { Service, Data } from './app.service';
import { AgendaComponent } from './composants/agenda/agenda.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin
import { AgendaService, DayService, MonthAgendaService, MonthService, RecurrenceEditor, RecurrenceEditorModule, ScheduleModule, TimelineMonthService, TimelineViewsService, WeekService, WorkWeekService } from '@syncfusion/ej2-angular-schedule';
import { ConroeComponent } from './composants/gallery/conroe/conroe.component';
import { BoxBraidsComponent } from './composants/gallery/box-braids/box-braids.component';
import { TwistComponent } from './composants/gallery/twist/twist.component';
import { CrochetComponent } from './composants/gallery/crochet/crochet.component';
import { SewInComponent } from './composants/gallery/sew-in/sew-in.component';
import { DreadLocsComponent } from './composants/gallery/dread-locs/dread-locs.component';
import { SettingsComponent } from './composants/settings/settings.component';
import { InscriptionComponent } from './composants/inscription/inscription.component';
import { ProfilComponent } from './composants/profil/profil.component';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { CarouselComponent } from './composants/carousel/carousel.component';
import { ScolariteComponent } from './composants/scolarite/scolarite.component';
import { NgSelectModule } from '@ng-select/ng-select';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { AllComponent } from './composants/gallery/all/all.component';





const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'newEtudiant', component: NewEtudiantComponent },
  { path: 'newCours', component: NewCoursComponent },
  { path: 'about', component: AboutComponent },
  { path: 'agenda', component: AgendaComponent },
  {path: 'login',component: LoginComponent},
  {path: 'conroe',component: ConroeComponent},
  {path: 'profil',component: ProfilComponent},
  {path: 'all',component: AllComponent},

  {path: 'settings',
  component: SettingsComponent,
   children: [
    { path: '', redirectTo: 'programme', pathMatch: 'full' },
    { path: 'programme', component: ProgrammeComponent },
    { path: 'user',component: UserComponent},
    { path: 'newUser', component: NewUserComponent },
    { path: 'detailUser/:id', component: UserDetailsComponent},
  //  { path: 'inscription', component: InscriptionComponent },

  ]
  },

  {path: 'scolarite', component: ScolariteComponent,
  children: [
    { path: '', redirectTo: 'etudiant', pathMatch: 'full' },
    { path: 'etudiant', component: EtudiantComponent },
    { path: 'detailEtudiant/:ref', component: DetailsEtudiantComponent},
    { path: 'classe', component: ClasseComponent },
    { path: 'cours', component: CoursComponent },

   // { path: '', redirectTo: '/etudiant', pathMatch: 'full' }
  ]
  }
  ];


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EtudiantComponent,
    NewEtudiantComponent,
    ProgrammeComponent,
    NewTuitionComponent,
    ClasseComponent,
    CoursComponent,
    NewCoursComponent,
    AboutComponent,

    DetailsEtudiantComponent,
    UserComponent,
    NewUserComponent,
    LoginComponent,
    AgendaComponent,
    ConroeComponent,
    BoxBraidsComponent,
    TwistComponent,
    CrochetComponent,
    SewInComponent,
    DreadLocsComponent,
    SettingsComponent,
    InscriptionComponent,
    ProfilComponent,
    CarouselComponent,
    ScolariteComponent,
    UserDetailsComponent,
    AllComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LightboxModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    WavesModule,
    CheckboxModule,
    ButtonsModule,
    InputsModule,
    IconsModule,

    NgxGalleryModule,
    CardsModule,
    GalleryModule,
    FullCalendarModule,
    ScheduleModule,
    RecurrenceEditorModule,
    InputUtilitiesModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    NgSelectModule,
    IvyCarouselModule
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    Service,
    DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
