export type user = {
  id: string;
  email: string;
  password: string;
  role: ROLES;
};

enum ROLES {
  ADMIN = 'admin',
  NORMAL = 'normal',
}

export interface AuthenticationData {
  id: string;
  role: ROLES;
}
