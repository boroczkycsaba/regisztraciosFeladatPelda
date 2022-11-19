import {Injectable} from '@angular/core';
import {AuthentiactionService} from "../../authentiaction.service";
import {UserForm} from "../../user-form";

@Injectable()
export class LoginService {

  constructor(private authentiactionService: AuthentiactionService) {
  }

  login(userForm: UserForm, routeLink?: string): void {
    if (userForm && userForm.email && userForm.password) {
      this.authentiactionService.authRemoutee(userForm, routeLink).subscribe();
    }
  }
}
