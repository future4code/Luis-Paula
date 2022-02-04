type Transactions = {
  transactionDate?: string;
  transactionValue?: number;
  transactionReceivedFrom?: string;
};

type Balance = {
  value: number;
  date: string;
  description: string;
  transactions?: Transactions[];
};
type Users = {
  cpf: string;
  name: string;
  birthday: string;
  balance: Balance[];
};

export const users: Users[] = [
  {
    cpf: '123.123.123-12',
    name: 'João',
    birthday: '13/05/1987',
    balance: [
      {
        value: 12000,
        date: '28/01/2022',
        description: 'tem 12000 reais na sua conta',
        transactions: [{}],
      },
    ],
  },
];
