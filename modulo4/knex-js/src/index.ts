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

//1 - a)

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `);

  return result[0][0];
};

//1 - B)
const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = '${name}'
    `);

  return result[0][0];
};

app.get('/actor', async (req: Request, res: Response) => {
  try {
    const name = req.query.name as string;

    res.send(await getActorByName(name));
  } catch (error: any) {
    res.status(500).send('Unexpected error');
  }
});

//1 - C)
const getActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
        SELECT * FROM Actor WHERE gender = '${gender}'
      `);
  return result[0];
};

//2 - a)
const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection('Actor')
    .update({
      salary: salary,
    })
    .where('id', id);
};

//2 - b)
const deleteActor = async (id: string): Promise<any> => {
  await connection('Actor').delete().where('id', id);
};

//2 -c)
const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection('Actor')
    .avg('salary as average')
    .where('gender', gender);

  return result[0].average;
};

app.get('/salary', async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender as string;
    res.status(200).send(await avgSalary(gender));
  } catch (error: any) {
    res.sendStatus(500);
  }
});

//3 - a)
app.get('/actor/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);

    res.status(200).send(actor);
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//3 - b)

app.get('/actor', async (req: Request, res: Response) => {
  try {
    const count = await getActorByGender(req.query.gender as string);
    res.status(200).send({
      quantity: count,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

//4 - a)

app.put('/actor', async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const salary = req.body.salary;
    await updateActor(id, salary);
    res.status(200).send({ message: 'sucesso' });
  } catch (error: any) {
    res.statusCode = 500;
  }
});

//4 - b)
app.delete('/actor/:id', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await deleteActor(id);
    res.status(200).send({ message: 'Ator deletado com sucesso' });
  } catch (error: any) {
    res.statusCode = 500;
  }
});
