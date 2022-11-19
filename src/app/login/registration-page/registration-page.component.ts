import { Component, OnInit } from '@angular/core';
import {RegistrationService} from "./registration.service";
import {UserForm} from "../../user-form";
import {AuthentiactionService} from "../../authentiaction.service";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit {

  user: UserForm = new UserForm();
  errorMessage : string = '';

  constructor(private registrationService : RegistrationService, private authentiactionService: AuthentiactionService) { }

  ngOnInit(): void {
    const isUserLoggedIn = this.authentiactionService.isUserLggedIn();
    if (isUserLoggedIn) {
      console.warn('Belépett felhasználó akar regisztrálni')
    }
  }

  registration() {
    if (this.user && this.user.email && this.user.password &&
      this.user.passowrdCheck && this.user.password === this.user.passowrdCheck) {
      this.registrationService.registrationUser(this.user).subscribe();
    } else {
      console.error("Űrlap kitöltési hiba", this.user)
    }

  }
}
