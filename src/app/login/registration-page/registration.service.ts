import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {finalize, tap} from "rxjs";
import {environment} from "../../../environments/environment";
import {UserForm} from "../../user-form";
import {User} from "../../user";
import {Router} from "@angular/router";

@Injectable()
export class RegistrationService {

  private _authenticationBaseUrl;

  constructor(private http: HttpClient, private router: Router) {
    this._authenticationBaseUrl = environment.apiBaseUrl + '/auth';
  }

  registrationUser(userForm: UserForm) {
    const _registrationUrl = this._authenticationBaseUrl + '/registration';
    const email = userForm.email;
    const password = userForm.password;

    return this.http.post<User>(_registrationUrl, {email, password}).pipe(
      tap(userResponse =>{
        console.debug('User', userResponse);
      }),
      finalize(() => {
        console.log('Navagiata to login page');
        this.router.navigate(['/start/login'])})
    );
  }
}
