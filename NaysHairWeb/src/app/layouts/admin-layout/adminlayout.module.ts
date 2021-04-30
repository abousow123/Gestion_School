import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeModule } from 'src/app/home/home.module';
import { AdminLayoutRoutingModule } from './adminlayout-routing.module';

import { Vue360Component } from 'src/app/pages/vue360/vue360.component';
import { AgiliteComponent } from 'src/app/pages/agilite/agilite.component';
import { MultiservicesComponent } from 'src/app/pages/multiservices/multiservices.component';
import { PartenairesComponent } from 'src/app/pages/partenaires/partenaires.component';
import { PolitiquerhComponent } from 'src/app/pages/politiquerh/politiquerh.component';
import { ConnectiviteComponent } from 'src/app/pages/connectivite/connectivite.component';
import { OptimisationComponent } from 'src/app/pages/optimisation/optimisation.component';
import { BackofficeComponent } from 'src/app/pages/backoffice/backoffice.component';

import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { GrapheComponent } from 'src/app/graphe/graphe.component';
import {Graphe3Component} from 'src/app/graphe3/graphe3.component';
import { ChartsModule } from 'ng2-charts';
import { Graphe2Component } from 'src/app/graphe2/graphe2.component';
import{Graphe4Component} from 'src/app/graphe4/graphe4.component';
import{Graphe5Component} from 'src/app/graphe5/graphe5.component';
import {Graphe6Component}from 'src/app/graphe6/graphe6.component';
import { Graphe7Component } from 'src/app/graphe7/graphe7.component';
import { Graphe8Component } from 'src/app/graphe8/graphe8.component';
import { Graphe9Component } from 'src/app/graphe9/graphe9.component';
import { Graphe10Component } from 'src/app/graphe10/graphe10.component';
import { Agilite1Component } from 'src/app/agilite1/agilite1.component';
import { Agilite3Component } from 'src/app/agilite3/agilite3.component';
import { Agilite6Component } from 'src/app/agilite6/agilite6.component';
import {Agilite2Component} from 'src/app/agilite2/agilite2.component';
import {Agilite4Component} from 'src/app/agilite4/agilite4.component';
import {Agilite5Component} from 'src/app/agilite5/agilite5.component';
import { Agilite7Component } from 'src/app/agilite7/agilite7.component';
import { GrapheBarHoriComponent } from 'src/app/graphe-bar-hori/graphe-bar-hori.component';
import {GrapheBarHori1Component} from 'src/app/graphe-bar-hori1/graphe-bar-hori1.component';
import {GrapheBarHori2Component} from 'src/app/graphe-bar-hori2/graphe-bar-hori2.component';
import { GrapheBarHori3Component } from 'src/app/graphe-bar-hori3/graphe-bar-hori3.component';
import { GrapheBarHori4Component } from 'src/app/graphe-bar-hori4/graphe-bar-hori4.component';
import { GrapheBarHori5Component } from 'src/app/graphe-bar-hori5/graphe-bar-hori5.component';
import { GrapheBarHori6Component } from 'src/app/graphe-bar-hori6/graphe-bar-hori6.component';


@NgModule({
    declarations: [
        GrapheComponent,
        Graphe3Component,
        Graphe2Component,
        Graphe4Component,
        Graphe5Component,
        GrapheBarHoriComponent,
        GrapheBarHori1Component,
        GrapheBarHori2Component,
        GrapheBarHori3Component,
        GrapheBarHori4Component,
        GrapheBarHori5Component,
        GrapheBarHori6Component,
        Graphe6Component,
        Graphe7Component,
        Graphe8Component,
        Graphe9Component,
        Graphe10Component,
        Vue360Component,
        AgiliteComponent,
        Agilite2Component,
        Agilite3Component,
        Agilite4Component,
        Agilite5Component,
        Agilite6Component,
        Agilite1Component,
        Agilite7Component,
        MultiservicesComponent,
        PartenairesComponent,
        PolitiquerhComponent,
        ConnectiviteComponent,
        OptimisationComponent,
        ProfileComponent,
        BackofficeComponent,
        LandingComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        HomeModule,
        AdminLayoutRoutingModule,
        ChartsModule
    ],
    exports: [],
    providers: []
})

export class AdminLayoutModule { }