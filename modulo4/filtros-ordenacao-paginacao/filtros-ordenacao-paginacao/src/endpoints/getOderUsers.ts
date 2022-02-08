import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { toUsers } from '../data/toUsers';

export const orderUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let sort = req.query.sort as string;
    let order = req.query.order as string;

    if (sort !== 'name' && sort !== 'type') {
      sort = 'email';
    }

    if (order.toUpperCase() !== 'ASC' && order.toUpperCase() !== 'DESC') {
      order = 'ASC';
    }

    const result = await connection('aula48_exercicio').orderBy(sort, order);
    const users = result.map(toUsers);

    if (!users.length) {
      res.statusCode = 404;
      throw new Error('No user data found');
    }

    res.status(200).send(users);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};
