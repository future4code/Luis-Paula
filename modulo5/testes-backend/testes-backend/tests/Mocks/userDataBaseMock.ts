import { User } from '../../src/model/User';
import { userMock, userMock_2 } from './userMock';

export class userDataBaseMock {
  public async createUser(user: User): Promise<void> {}
  public async getUserByEmail(email: string): Promise<User | undefined> {
    if (email === 'mock@mail.com') {
      return userMock;
    } else if (email === 'mock2@mail.com') {
      return userMock_2;
    } else {
      undefined;
    }
  }
  public async getUserById(id: string): Promise<User | undefined> {
    if (id === 'id_mockado') {
      return userMock;
    } else if (id === 'id_mockado_2') {
      return userMock_2;
    } else {
      undefined;
    }
  }
  public async getAllUsers(): Promise<User[]> {
    return [userMock, userMock_2];
  }
}
