import { Temporal } from '@js-temporal/polyfill';
import { Request, Response } from 'express';
import { RecipeDataBase } from '../data/recipeDataBase';
import { Recipe } from '../entities/Recipe';
import { Authenticator } from '../services/authenticator';
import { IdGenerator } from '../services/idGenerator';

export const recipe = async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    const created_at = Temporal.Now.plainDateISO().toString();

    if (!title || !description) {
      res.statusCode = 422;
      throw new Error(`Não foi passado 'title' e/ou 'description'`);
    }

    const recipeDataBase = new RecipeDataBase();
    const recipe = await recipeDataBase.findRecipeByTitle(title);

    if (recipe) {
      res.statusCode = 409;
      throw new Error('Receita já cadastrada');
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generateUserId();

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({ id });

    const newRecipe = new Recipe(id, title, description, created_at);
    await recipeDataBase.createRecipe(newRecipe);

    res.status(201).send({ message: 'Receita criada com sucesso', token });
  } catch (error: any) {
    res.send({ message: error.message });
  }
};
