import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from 'src/app/pages/profile/profile.component';
import { LandingComponent } from 'src/app/pages/landing/landing.component';
import { HomeComponent } from 'src/app/home/home.component';
import { AgiliteComponent } from 'src/app/pages/agilite/agilite.component';
import { Vue360Component } from 'src/app/pages/vue360/vue360.component';
import { MultiservicesComponent } from 'src/app/pages/multiservices/multiservices.component';
import { PartenairesComponent } from 'src/app/pages/partenaires/partenaires.component';
import { PolitiquerhComponent } from 'src/app/pages/politiquerh/politiquerh.component';
import { ConnectiviteComponent } from 'src/app/pages/connectivite/connectivite.component';
import { OptimisationComponent } from 'src/app/pages/optimisation/optimisation.component';
import { BackofficeComponent } from 'src/app/pages/backoffice/backoffice.component';
import{Agilite1Component}from 'src/app/agilite1/agilite1.component';
import {Agilite3Component} from 'src/app/agilite3/agilite3.component';
import {Agilite4Component} from 'src/app/agilite4/agilite4.component';
import {Agilite5Component} from 'src/app/agilite5/agilite5.component';
import {Agilite6Component  } from "src/app/agilite6/agilite6.component";
import {Agilite7Component} from 'src/app/agilite7/agilite7.component';
import {Agilite2Component} from 'src/app/agilite2/agilite2.component';

const routeConfigs: Routes = [
    {
        path: 'axe1-agilite',
        component: Agilite1Component
    },
    {
        path: 'axe6-agilite',
        component: Agilite6Component
    },
    {
        path: 'axe5-agilite',
        component: Agilite5Component
    },
    {
        path: 'axe4-agilite',
        component: Agilite4Component
    },

    {
        path: 'axe3-agilite',
        component: Agilite3Component
    },
    {
        path: 'axe2-agilite',
        component: Agilite2Component
    },
    
    {
        path: 'axe-agilite',
        component: AgiliteComponent
    },
    {
        path: 'vue360',
        component: Vue360Component
    },
    {
        path: 'multiservices',
        component: MultiservicesComponent
    },
    {
        path: 'partenaires',
        component: PartenairesComponent
    },
    {
        path: 'politique-rh',
        component: PolitiquerhComponent
    },
    {
        path: 'connectivite',
        component: ConnectiviteComponent
    },
    {
        path: 'optimisation',
        component: OptimisationComponent
    },
    {
        path: 'backoffice',
        component: BackofficeComponent
    },
    {
        path: 'profile',
        component: ProfileComponent
    },

    {
        path: 'landing',
        component: LandingComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routeConfigs)],
    exports: []
})
export class AdminLayoutRoutingModule {}