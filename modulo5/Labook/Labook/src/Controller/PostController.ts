import { Request, Response } from 'express';
import { PostBusiness } from '../Business/PostBusiness';

const postBusiness = new PostBusiness();

export class PostController {
  createPost = async (req: Request, res: Response) => {
    try {
      let message = 'Success!';

      const { photo, description, type } = req.body;

      await postBusiness.createPost({
        photo,
        description,
        type,
      });

      res.status(201).send({ message });
    } catch (error: any) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;

      res.send({ message });
    }
  };

  getPostById = async (req: Request, res: Response) => {
    try {
      let message = 'Success!';

      const { id } = req.params;

      const post = await postBusiness.getPostById(id);

      res.status(200).send({ message, post });
    } catch (error: any) {
      let message = error.sqlMessage || error.message;
      res.statusCode = 400;

      res.send({ message });
    }
  };
}
