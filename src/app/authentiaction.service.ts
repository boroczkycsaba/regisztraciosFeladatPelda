import {Injectable} from '@angular/core';
import {BehaviorSubject, finalize, map, Subscription, tap} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {environment} from "../environments/environment";
import {UserForm} from "./user-form";
import {User} from "./user";
import {Router} from "@angular/router";

@Injectable()
export class AuthentiactionService {

  private _loggedInUser = new BehaviorSubject<User>(new User());
  private _authenticationBaseUrl;

  constructor(private http: HttpClient, private router: Router) {
    this._authenticationBaseUrl = environment.apiBaseUrl + '/auth';
  }

  authRemoutee(userForm: UserForm, routeLink?: string) {
    const _loginUrl = this._authenticationBaseUrl + '/login';
    console.log(_loginUrl);
    const email = userForm.email;
    const password = userForm.password;
    return this.http.post<User>(`${this._authenticationBaseUrl}/login`, {email, password})
      .pipe(
        tap(user => {
          console.log("Megérkezett a válasz", user);
          this._loggedInUser.next(user);
        }),
        finalize(() => {
            console.debug('After login navigate to', routeLink);
            if (routeLink) {
              this.router.navigate([routeLink])
            }
          }
        )
      );
  }

  isUserLggedIn() {
    const user = this._loggedInUser.getValue();
    return user && user.email;
  }

  get loggedInUser(): Subscription {
    return this._loggedInUser.subscribe();
  }
}
