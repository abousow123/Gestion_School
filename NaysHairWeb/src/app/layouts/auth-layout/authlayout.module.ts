import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLayoutRoutingModule } from './authlayout-routing.module';

import { LoginComponent } from 'src/app/pages/login/login.component';
import { SignupComponent } from 'src/app/pages/signup/signup.component';


@NgModule({
    declarations: [
        LoginComponent,
        SignupComponent
    ],
    imports: [
        NgbModule,
        FormsModule,
        CommonModule,
        AuthLayoutRoutingModule
    ]
})

export class AuthLayoutModule {}
