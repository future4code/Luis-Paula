import express, { Request, Response } from 'express';
import { users } from './data';

const app = express();
app.use(express.json());

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});

//Exercícios

//1
app.get('/list', (req: Request, res: Response) => {
  res.status(200).send(users);
});

//a) o método get;
//b) a entidade usada é o caminho entre aspas simples após o método get, no caso desse exercício é '/list'.

//2
app.get('/list/users', (req: Request, res: Response) => {
  try {
    const userType = req.query.type as string;
    if (!userType) {
      throw new Error('Tipo de usuário não existe ou não encontrado');
    }
    const types = users.filter((user) => {
      if (user.type === userType) {
        return user;
      }
    });
    res.status(200).send(types);
  } catch (e: any) {
    switch (e.message) {
      case 'Tipo de usuário não existe ou não encontrado':
        res.statusCode = 404;
        break;
      default:
        res.statusCode = 500;
    }
  }
});

//a) Os parâmetros foram passados por query. Passei por query por ser uma busca simples sem precisar modificar nada na array;
//b) utilizando o trycatch, assim o que não for igual aos types não é retornado.

//3
app.get('/list/name', (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    if (!name) {
      throw new Error('Usuário não encontrado');
    }

    const getByName = users.filter((item) => {
      if (item.name === name) {
        return item;
      }
    });
    res.status(200).send(getByName);
  } catch (e: any) {
    switch (e.message) {
      case 'Usuário não encontrado':
        res.statusCode = 404;
        break;
      default:
        res.statusCode = 500;
    }
  }
});

//a) Utilizei novamente o get com o query, por ser uma busca simples o query consegue fazer tranquilamente.

//4
app.post('/list', (req: Request, res: Response) => {
  const { id, name, email, type, age } = req.body;

  users.push({
    id,
    name,
    email,
    type,
    age,
  });
  res.status(200).send(users);
});
