import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SessionsRoutingModule } from './sessions-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SessionsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [SignupComponent, SigninComponent, ForgotComponent]
})
export class SessionsModule { }
