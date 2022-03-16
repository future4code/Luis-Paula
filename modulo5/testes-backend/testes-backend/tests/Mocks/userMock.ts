import { User, USER_ROLES } from '../../src/model/User';

export const userMock = new User(
  'id_mockado',
  'Mock_1',
  'mock@mail.com',
  'mock123',
  USER_ROLES.NORMAL
);

export const userMock_2 = new User(
  'id_mockado_2',
  'Mock_2',
  'mock2@mail.com',
  'mock123',
  USER_ROLES.ADMIN,
);
