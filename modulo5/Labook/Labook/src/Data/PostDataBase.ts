import { post } from '../Model/Post';
import { BaseDataBase } from './BaseDataBase';

export class PostDataBase extends BaseDataBase {
  createPost = async (post: post) => {
    await connection('labook_posts').insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      author_id: tokenData.id,
    });
  };

  getPost = async (id: string) => {
    const queryResult: any = await BaseDataBase.connection('labook_posts')
      .select('*')
      .where({ id });

    if (!queryResult[0]) {
      message = 'Post not found';
      throw new Error(message);
    }

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
