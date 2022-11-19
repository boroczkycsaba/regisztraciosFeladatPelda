import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import {RegistrationService} from "./registration-page/registration.service";
import {FormsModule} from "@angular/forms";
import {LoginService} from "./login-page/login.service";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {LoginRoute} from "./login-route";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    LoginPageComponent,
    RegistrationPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    LoginRoute
  ],
  providers: [RegistrationService, LoginService],
  exports: [LoginPageComponent, RegistrationPageComponent]
})
export class LoginModule { }
