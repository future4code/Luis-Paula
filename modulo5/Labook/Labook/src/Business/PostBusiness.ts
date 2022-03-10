import { PostDataBase } from '../Data/PostDataBase';
import { authenticationData } from '../Model/AuthenticationData';
import { postData } from '../Model/Post';
import { Authenticator } from '../Services/Authenticator';
import { IdGenerator } from '../Services/IdGenerator';

const idGenerator = new IdGenerator();
const postDB = new PostDataBase();
const auth = new Authenticator();
export class PostBusiness {
  createPost = async (post: postData) => {
    let message = 'Success!';

    if (!post.photo || !post.description || !post.type) {
      message = '"photo", "description" e "type" são obrigatórios';
      throw new Error(message);
    }

    const id: string = idGenerator.generateId();
    const createdAt = new Date().toISOString().split('T')[0] as any;

    const token: string = auth.generateToken({ id });

    const newPost = {
      ...post,
      id,
      createdAt,
      authorId: token,
    };

    await postDB.createPost(newPost);

    const tokenData: authenticationData = auth.getTokenData(token);

    return tokenData;
  };

  getPostById = async (id: string) => {
    let message = 'Success!';
    const result = await postDB.getPost(id);

    if (!result) {
      message = 'Post not found';
      throw new Error(message);
    }

    const userInfo = {
      id: result.id,
      photo: result.photo,
      description: result.description,
      type: result.type,
      authorId: result.authorId,
      created_at: result.createdAt,
    };

    return userInfo;
  };
}
