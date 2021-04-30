// import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { SectionsModule } from '../sections/sections.module';
import { NgbdModalComponent, NgbdModalContent } from '../sections/modal/modal.component';
import { SectionsComponent } from '../sections/sections.component';
import { ButtonsSectionComponent } from '../sections/buttons-section/buttons-section.component';
import { InputsSectionComponent } from '../sections/inputs-section/inputs-section.component';
import { CrsSectionComponent } from '../sections/crs-section/crs-section.component';
import { NavigationSectionComponent } from '../sections/navigation-section/navigation-section.component';
import { TabsSectionComponent } from '../sections/tabs-section/tabs-section.component';
import { AlertsSectionComponent } from '../sections/alerts-section/alerts-section.component';
import { TypographySectionComponent } from '../sections/typography-section/typography-section.component';
import { AngularSectionComponent } from '../sections/angular-section/angular-section.component';
import { NucleoSectionComponent } from '../sections/nucleo-section/nucleo-section.component';
import { VersionsSectionComponent } from '../sections/versions-section/versions-section.component';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';

@NgModule({
    imports: [
        CommonModule,
        // BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule,
        NgbModule,
        RouterModule,
        NouisliderModule,
        JwBootstrapSwitchNg2Module
    ],
    declarations: [ 
        HomeComponent
    ],
    entryComponents: [NgbdModalContent],
    exports:[ HomeComponent ],
    providers: []
})
export class HomeModule { }
