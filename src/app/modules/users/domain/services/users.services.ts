import type { UserWithPassword, User } from '../schemas/user.schema';

export interface FetchUserCreateBodyService {
  body: UserWithPassword;
}

export type FetchCreateUserService = (
  args: FetchUserCreateBodyService
) => Promise<User>;

export type FetchGetUser = (args: Pick<User, 'id'>) => Promise<User>;

export type FetchUpdateUser = (
  args: Pick<User, 'id'> & FetchUserCreateBodyService
) => Promise<User>;

export type FetchDeleteUser = (args: Pick<User, 'id'>) => Promise<User>;

export type FetchListUser = () => Promise<Array<User>>;

export interface FetchUsersServices {
  fetchCreateUserService: FetchCreateUserService;
  fetchGetUser: FetchGetUser;
  fetchUpdateUser: FetchUpdateUser;
  fetchDeleteUser: FetchDeleteUser;
  fetchListUser: FetchListUser;
}
