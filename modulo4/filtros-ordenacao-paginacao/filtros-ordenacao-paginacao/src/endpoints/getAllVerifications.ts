import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { toUsers } from '../data/toUsers';

export const allVerifications = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let type = req.query.type;
    let name = req.query.name as string;
    let sort = req.query.sort as string;
    let order = req.query.order as string;
    let size = 5;
    let page = Number(req.query.page);
    let offset = size * (page - 1);

    if (sort === '') {
      sort = 'name';
    }

    if (order.toUpperCase() !== 'ASC' && order.toUpperCase() !== 'DESC') {
      order = 'DESC';
    }

    if (name === '') {
      name = '%%';
    }

    if (type === '') {
      type = '%%';
    }

    const result = await connection('aula48_exercicio')
      .where('type', 'like', `%${type}%`)
      .where('name', 'like', `%${name}%`)
      .orderBy(sort, order)
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
