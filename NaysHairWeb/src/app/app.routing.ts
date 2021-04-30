import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { HomeComponent } from './home/home.component';
// import { ProfileComponent } from './profile/profile.component';
// import { LandingComponent } from './landing/landing.component';
import { AuthLayoutComponent } from 'src/app/layouts/auth-layout/authlayout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/adminlayout.component';
import { PageNotFoundComponent } from 'src/app/pages/page-not-found/page-not-found.component';


const routes: Routes = [
    // { path: 'home',             component: HomeComponent },
    // { path: 'user-profile',     component: ProfileComponent },
    // { path: 'landing',          component: LandingComponent },
    {
      path: 'auth',
      component: AuthLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: 'src/app/layouts/auth-layout/authlayout.module#AuthLayoutModule'
        }
      ]
    },
    {
      path: 'admin',
      component: AdminLayoutComponent,
      children: [
        {
          path: '',
          loadChildren: 'src/app/layouts/admin-layout/adminlayout.module#AdminLayoutModule'
        }
      ]
    },
    { path: '', redirectTo: 'admin/vue360', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
//    CommonModule,
//    BrowserModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
})
export class AppRoutingModule { }
