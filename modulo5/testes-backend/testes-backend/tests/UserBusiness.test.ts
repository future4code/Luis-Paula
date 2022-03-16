import { UserBusiness } from '../src/business/UserBusiness';
import { CustomError } from '../src/errors/CustomError';
import { HashGeneratorMock } from './Mocks/hashManagerMock';
import { IdGeneratorMock } from './Mocks/idGeneratorMock';
import { TokenGeneratorMock } from './Mocks/tokenGeneratorMock';
import { userDataBaseMock } from './Mocks/userDataBaseMock';

const userBusinessMock = new UserBusiness(
  new IdGeneratorMock(),
  new HashGeneratorMock(),
  new TokenGeneratorMock(),
  new userDataBaseMock() as any
);

describe('Testes getUserById', () => {
  test('Should user not exist', async () => {
    expect.assertions;
    try {
      await userBusinessMock.getUserById('id_mockado_3');
    } catch (e: any) {
      expect(e.message).toEqual('User not found');
      expect(e.statusCode).toBe(404);
    }
  });

  test('Should return success', async () => {
    expect.assertions;
    try {
      const result = await userBusinessMock.getUserById('id_mockado');
      expect(result).toEqual({
        id: 'id_mock',
        name: 'Mock_1',
        email: 'mock@mail.com',
        password: 'mock123',
        role: 'NORMAL',
      });
    } catch (e) {
      console.log(e);
    }
  });
});
