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

const getUserById = async (id: string): Promise<any> => {
  const result = await connection('TodoListUser')
    .select('id', 'name')
    .where('id', id);
  return result;
};

app.get('/user/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    res.status(200).send(await getUserById(id));
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

app.get('/task/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
  } catch (error) {}
});
