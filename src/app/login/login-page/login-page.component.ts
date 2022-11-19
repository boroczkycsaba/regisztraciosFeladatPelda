import { Component, OnInit } from '@angular/core';
import {User} from "../../user";
import {LoginService} from "./login.service";
import {MAT_FORM_FIELD, MatFormField, MatFormFieldControl} from '@angular/material/form-field';
import {Router} from "@angular/router";
import {UserForm} from "../../user-form";
import {AuthentiactionService} from "../../authentiaction.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  user: UserForm = new UserForm();
  errorMessage : string = '';

  constructor(private loginService: LoginService, private authentiactionService: AuthentiactionService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.errorMessage = '';
    if (!this.user.email) {
      this.errorMessage = 'Kérem töltse ki a felhasználó név mezőt ';
    }
    if (!this.user.password) {
      this.errorMessage +='Kérem töltse ki a jelszó cím mezőt ';
    }
    this.loginService.login(this.user, '/home');
  }

  navigataToRegistration() {
    this.router.navigate(['/start/registration']);
  }
}
