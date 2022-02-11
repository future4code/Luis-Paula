import { Request, Response } from 'express';
import { connection } from '../../data/connection';

export const getPurchase = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;

    const user = dataInteract(id);

    res.status(200).send(user);
  } catch (error: any) {
    res.send({
      message: error.message || error.sqlMessage,
    });
  }
};

const dataInteract = async (id: string): Promise<any> => {
  await connection.raw(`
    SELECT * FROM labecommerce_purchases
    INNER JOIN labecommerce_purchases.user_id = labecommerce_users.id
    WHERE user_id = "${id}";
    `);
};
