import express, { Request, Response } from 'express';
import { users } from './data';

const app = express();
app.use(express.json());

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});

app.get('/user', (req: Request, res: Response) => {
  res.send(users);
});

app.get('/user/balance', (req: Request, res: Response) => {
  const auth = req.headers.authorization;
  const name = req.query.name;

  const balance = users.map((info) => {
    if (info.name === name && info.cpf === auth) {
      return info.balance.map((value) => {
        return `O seu saldo é de ${value.value} reais`;
      });
    }
  });

  res.status(200).send(balance);
});

app.get('/user/:cpf', (req: Request, res: Response) => {
  try {
    const cpf = req.params.cpf;

    res.status(200).send(
      users.map((user) => {
        if (user.cpf === cpf) {
          return user;
        } else if (cpf !== user.cpf) {
          throw new Error(
            'Cpf não cadastrado ou errado, por favor verifique novamente'
          );
        }
      })
    );
  } catch (e: any) {
    switch (e.message) {
      case 'Cpf não cadastrado ou errado, por favor verifique novamente':
        res.statusCode = 404;
        break;
    }
  }
});

app.post('/user', (req: Request, res: Response) => {
  try {
    const cpf = req.body.cpf;
    const name = req.body.name;
    const birthday = req.body.birthday;
    const date = req.body.balance.date;
    const value = 0;
    const verifyAge = Number(req.headers.authorization);
    if (!verifyAge) {
      throw new Error('Não autorizado, por favor verifique o header');
    }
    if (verifyAge > 2004) {
      throw new Error(
        'Usuário menor de 18 anos, não é possível fazer o cadastro'
      );
    }
    users.push({
      cpf,
      name,
      birthday,
      balance: [
        {
          value,
          date,
          description: `Seu saldo é de ${value} reais`,
          transactions: [{}],
        },
      ],
    });

    res.status(200).send(users);
  } catch (e: any) {
    switch (e.message) {
      case 'Não autorizado, por favor verifique o header':
        res.statusCode = 401;
        break;
      case 'Usuário menor de 18 anos, não é possível fazer o cadastro':
        res.statusCode = 404;
        break;
      default:
        res.statusCode = 500;
    }
  }
});
