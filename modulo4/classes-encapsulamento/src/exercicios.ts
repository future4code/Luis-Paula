//Exercício 1
//a)
// O constructor serve para executar ações dento da instância de classe. Chamamos o constructor com o new ao declarar uma variável fora.

//b)
class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string, name: string, age: number) {
    console.log('Chamando o construtor da classe UserAccount');
    this.cpf = cpf;
    this.name = name;
    this.age = age;
  }

  public getName() {
    return this.name;
  }

  public getCPF() {
    return this.cpf;
  }

  public getAge() {
    return this.age;
  }

  public getBalance() {
    return this.balance;
  }

  public getTransactions() {
    return this.transactions;
  }
}

const cliente = new UserAccount('123.123.123-11', 'Aldo', 30);
console.log(cliente.getTransactions());

//Foi impresso no terminal apenas 1 vez a mensagem

//c)
//Podemos ter acesso a uma propriedade privada de uma classe fazendo um getter, sendo possível fazer uma propriedade privada ficar pública.

//2)
class Transaction {
  private description: string;
  private value: number;
  private date: string;

  constructor(description: string, value: number, date: string) {
    this.description = description;
    this.value = value;
    this.date = date;
  }

  public getDescription() {
    return this.description;
  }

  public getVale() {
    return this.value;
  }

  public getDate() {
    return this.date;
  }
}

//3

class Bank {
  private account: UserAccount[];

  constructor(account: UserAccount[]) {
    this.account = account;
  }

  public getAccount() {
    return this.account;
  }
}

const conta = new Bank([]);
console.log(conta.getAccount());
