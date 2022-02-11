import { Request, Response } from 'express';
import { connection } from '../../data/connection';
import { Purchase } from '../../types';

export const addPurchase = async (req: Request, res: Response) => {
  try {
    const id = Date.now().toString();
    const userId = req.body.user_id;
    const productId = req.body.product_id;
    const quantity: number = Number(req.body.quantity);

    const userIdVerification = await connection.raw(`
                SELECT id FROM labecommerce_users WHERE id = "${userId}"
            `);

    const productIdVerification = await connection.raw(`
                SELECT * FROM labecommerce_products WHERE id = "${productId}";
            `);

    const total_price = productIdVerification[0][0].price * quantity;

    await dataInteract({ id, userId, productId, quantity, total_price });
    const results = await connection.raw(`
            SELECT * FROM labecommerce_purchases;
        `);
    res.status(200).send(results[0]);
  } catch (error: any) {
    res.send(error.message || error.sqlMessage);
  }
};
const dataInteract = async ({
  id,
  userId,
  productId,
  quantity,
  total_price,
}: Purchase): Promise<any> => {
  await connection.raw(`
        INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price) VALUES
            ("${id}", "${userId}", "${productId}", "${quantity}", "${total_price}");
    `);
};
