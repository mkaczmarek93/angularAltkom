import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';

import { UserRoutingModule } from './user-routing.module';

import { PageUserProfileComponent } from './pages/page-user-profile/page-user-profile.component';
import { PageUserRegisterComponent } from './pages/page-user-register/page-user-register.component';
import { PageUserLoginComponent } from './pages/page-user-login/page-user-login.component';

@NgModule({
  declarations: [
    PageUserProfileComponent,
    PageUserRegisterComponent,
    PageUserLoginComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class UserModule { }
