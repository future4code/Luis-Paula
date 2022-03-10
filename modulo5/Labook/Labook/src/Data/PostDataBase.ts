import { post } from '../Model/Post';
import { BaseDataBase } from './BaseDataBase';

export class PostDataBase extends BaseDataBase {
  createPost = async (post: post) => {
    await BaseDataBase.connection('labook_posts').insert({
      post,
    });
  };

  getPost = async (id: string) => {
    const queryResult: any = await BaseDataBase.connection('labook_posts')
      .select('*')
      .where({ id });

    const post: post = {
      id: queryResult[0].id,
      photo: queryResult[0].photo,
      description: queryResult[0].description,
      type: queryResult[0].type,
      createdAt: queryResult[0].created_at,
      authorId: queryResult[0].author_id,
    };

    return post;
  };
}
