import { Recipe } from '../entities/Recipe';
import { Connection } from './connection';

export class RecipeDataBase extends Connection {
  public async createRecipe(recipe: Recipe) {
    try {
      await Connection.connection('Cookenu_recipes').insert({
        id: recipe.getId(),
        title: recipe.getTitle(),
        description: recipe.getDescription(),
        created_at: recipe.getCreatedAt(),
      });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async findRecipeByTitle(title: string): Promise<Recipe> {
    try {
      const recipe = await Connection.connection('Cookenu_recipes')
        .select('*')
        .where({ title });

      return recipe[0] && Recipe.toUserModel(recipe[0]);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }

  public async getRecipesById(id: string): Promise<Recipe[]> {
    try {
      const recipes = await Connection.connection('Cookenu_recipes')
        .select('id', 'title', 'description')
        .where({ id });

      return (
        recipes[0] &&
        recipes[0].map((recipe: string) => {
          Recipe.toUserModel(recipe);
        })
      );
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
