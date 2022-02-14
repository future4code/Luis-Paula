import express, { Request, Response } from 'express';
import knex from 'knex';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

export const connection = knex({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const serverPort = 3001;

app.listen(serverPort, () => {
  console.log(`O servidor é http://localhost:${serverPort}`);
});

const editUser = async (
  id: string,
  name?: string,
  nickname?: string,
  email?: string
): Promise<any> => {
  const result = await connection('TodoListUser')
    .update({
      name: name,
      nickname: nickname,
      email: email,
    })
    .where('id', id);

  return result;
};

const addTask = async (
  id: string,
  title: string,
  description: string,
  limitDate: string,
  creatorUserId: string
): Promise<any> => {
  const result = await connection('TodoListTask').insert({
    id,
    title,
    description,
    limit_date: limitDate,
    creator_user_id: creatorUserId,
  });
  return result;
};

app.post('/task', async (req: Request, res: Response) => {
  try {
    const id = Date.now().toString();
    let { title, description, limitDate, creatorUserId } = req.body;
    limitDate = limitDate.split('/').reverse().join('/');

    await addTask(id, title, description, limitDate, creatorUserId);

    res.status(200).send({ message: 'Tarefa adicionada com sucesso' });
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

app.post('/user/edit/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { name, nickname, email } = req.body;
    await editUser(id, name, nickname, email);
    res.status(200).send({
      message: 'Usuário modificado com sucesso',
      id,
      name,
      nickname,
      email,
    });
  } catch (error: any) {
    res.sendStatus(500).send({ message: error.message });
  }
});
