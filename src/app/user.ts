export class User {
  private _id?: string;
  private _userName?: string;
  private _email?: string;
  private _password?: string;

  constructor() {
  }

  get id(): string | undefined {
    return this._id;
  }

  set id(value: string | undefined) {
    this._id = value;
  }

  get userName(): string  | undefined {
    return this._userName;
  }

  set userName(value: string| undefined) {
    this._userName = value;
  }

  get email(): string  | undefined {
    return this._email;
  }

  set email(value: string| undefined) {
    this._email = value;
  }

  get password(): string | undefined {
    return this._password;
  }

  set password(value: string| undefined) {
    this._password = value;
  }
}

