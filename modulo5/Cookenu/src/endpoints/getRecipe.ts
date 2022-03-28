import { Request, Response } from 'express';
import { getData } from '../data/getData';
import { RecipeDataBase } from '../data/recipeDataBase';

export const getRecipe = async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;
    const id = req.params.id;

    const auth = getData(token);

    const recipeDataBase = new RecipeDataBase();
    const recipe = await recipeDataBase.getRecipesById(id);

    if (!token) {
      res.statusCode = 422;
      throw new Error(
        `Não foi passado um 'token' de autorização, por favor verifique`
      );
    }

    res.status(200).send({
      recipe,
    });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};
