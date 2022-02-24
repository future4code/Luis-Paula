export class User {
  constructor(
    private id: string,
    private email: string,
    private name: string,
    private password: string
  ) {}

  public getId() {
    return this.id;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getPassword() {
    return this.password;
  }

  static toUserModel(data: any) {
    return new User(data.id, data.email, data.name, data.password);
  }
}
