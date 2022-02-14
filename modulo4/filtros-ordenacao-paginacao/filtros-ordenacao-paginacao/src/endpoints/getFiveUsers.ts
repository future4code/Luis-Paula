import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { toUsers } from '../data/toUsers';

export const pagingUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let size = 5;
    let page = Number(req.query.page);
    let offset = size * (page - 1);

    const result = await connection('aula48_exercicio')
      .limit(size)
      .offset(offset);
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
