import { Request, Response } from 'express';
import { connection } from '../data/connection';
import { productInputs } from '../data/inputs';

export const getAllProducts = async (
  req: Request,
  res: Response
): Promise<any> => {
  try {
    const result = await connection('labecommerce_products');
    const product = result.map(productInputs);

    res.status(200).send(product);
  } catch (error: any) {
    res.send({
      message: error.message || error.sqlMessage,
    });
  }
};
