import { log } from 'console';

export class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;
  public introduceYourself(): string {
    return `Olá ${this.name}, Bom dia!`;
  }

  constructor(id: string, email: string, name: string, password: string) {
    console.log('Chamando o construtor da classe User');
    this.id = id;
    this.email = email;
    this.name = name;
    this.password = password;
  }

  public getId(): string {
    return this.id;
  }

  public getEmail(): string {
    return this.email;
  }

  public getName(): string {
    return this.name;
  }
}
const user = new User('1', 'teste@email.com', 'teste', '123');
log(user.introduceYourself());
