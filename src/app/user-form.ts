import {User} from "./user";

export class UserForm extends User {
  private _passowrdCheck?: string;

  constructor() {
    super();
  }
  get passowrdCheck(): string | undefined {
    return this._passowrdCheck;
  }

  set passowrdCheck(value: string | undefined) {
    this._passowrdCheck = value;
  }
}
