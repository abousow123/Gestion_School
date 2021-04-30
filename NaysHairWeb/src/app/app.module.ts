import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
// import { LandingComponent } from './landing/landing.component';  
// import { ProfileComponent } from './profile/profile.component';
// import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { FooterComponent } from './partials/footer/footer.component';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/authlayout.component';
import { AdminLayoutComponent } from 'src/app/layouts/admin-layout/adminlayout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { GrapheComponent } from './graphe/graphe.component';
import{ChartsModule} from  'ng2-charts';
import { Graphe5Component } from './graphe5/graphe5.component';
import { Graphe6Component } from './graphe6/graphe6.component';
import { Graphe7Component } from './graphe7/graphe7.component';
import { Graphe8Component } from './graphe8/graphe8.component';
import { Graphe9Component } from './graphe9/graphe9.component';
import { Agilite7Component } from './agilite7/agilite7.component';
import { GrapheBarHoriComponent } from './graphe-bar-hori/graphe-bar-hori.component';
import { GrapheBarHori1Component } from './graphe-bar-hori1/graphe-bar-hori1.component';
import { GrapheBarHori2Component } from './graphe-bar-hori2/graphe-bar-hori2.component';
import { GrapheBarHori3Component } from './graphe-bar-hori3/graphe-bar-hori3.component';
import { GrapheBarHori4Component } from './graphe-bar-hori4/graphe-bar-hori4.component';
import { GrapheBarHori5Component } from './graphe-bar-hori5/graphe-bar-hori5.component';
import { GrapheBarHori6Component } from './graphe-bar-hori6/graphe-bar-hori6.component';
//import { Agilite2Component } from './agilite2/agilite2.component';
//import { Agilite3Component } from './agilite3/agilite3.component';
//import { Agilite4Component } from './agilite4/agilite4.component';
//import { Agilite5Component } from './agilite5/agilite5.component';
//import { Agilite6Component } from './agilite6/agilite6.component';
//import { Agilite1Component } from './agilite1/agilite1.component';
//import { Graphe10Component } from './graphe10/graphe10.component';
// import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    // LandingComponent,
    // ProfileComponent,
    NavbarComponent,
    FooterComponent,
    AuthLayoutComponent,
    AdminLayoutComponent,
    PageNotFoundComponent,
    //GrapheBarHori2Component,
   // GrapheBarHori3Component,
   // GrapheBarHori4Component,
   // GrapheBarHori5Component,
   // GrapheBarHori6Component,
    //GrapheBarHori1Component,
    //GrapheBarHoriComponent,
   // Agilite7Component,
  //  Agilite2Component,
   // Agilite3Component,
   // Agilite4Component,
   // Agilite5Component,
   // Agilite6Component,
    //Agilite1Component,
    //Graphe10Component,
    //Graphe8Component,
    //Graphe9Component,
    //Graphe7Component,
    //Graphe5Component,
    //Graphe6Component,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule,
    AppRoutingModule,
    // HomeModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
