import { Request, Response } from 'express';
import { connection } from '../../data/connection';

export const addNewProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = Date.now().toString();
    const { name, price, imageUrl } = req.body;

    await connection('labecommerce_products').insert({
      id,
      name,
      price,
      image_url: imageUrl,
    });

    res.status(200).send('Produto adicionado com sucesso!');
  } catch (error: any) {
    res.send({
      message: error.message || error.sqlMessage,
    });
  }
};
