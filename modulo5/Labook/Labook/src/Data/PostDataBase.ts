import { post } from '../Model/Post';
import { BaseDataBase } from './BaseDataBase';

export class PostDataBase extends BaseDataBase {
  createPost = async (post: post) => {
    await BaseDataBase.connection('labook_posts').insert({
      id: post.id,
      photo: post.photo,
      description: post.description,
      type: post.type,
      created_at: post.createdAt,
      author_id: post.authorId,
    });
  };

  getPost = async (id: string) => {
    const post: any = await BaseDataBase.connection('labook_posts')
      .select('*')
      .where({ id });

    return post[0];
  };
}
