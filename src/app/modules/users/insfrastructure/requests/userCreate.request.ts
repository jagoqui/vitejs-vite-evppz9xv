import { type FetchCreateUserService } from '../../domain/services/users.services';
import { userSchema, type User } from '../../domain/schemas/user.schema';
import { api } from '../../../shared/infrastructure/clients/ky/ky.client';
import { VARIABLES } from '../../../../variables/infrastructure/constants/variables.constant';
import { type UserDTO } from '../dto/user.dto';
import { transformUserDto } from '../adapters/user/user.adapter';
import { transformUserBody } from '../adapters/userBody/userBody.adapter';

export const fetchCreateUserRequest: FetchCreateUserService = async ({
  body,
}): Promise<User> => {
  const userDTO = await api
    .post<UserDTO>(`${VARIABLES.REACT_APP_API}/user`, {
      json: transformUserBody(body),
    })
    .json();

  const getUser = transformUserDto(userDTO);

  return userSchema.parse(getUser);
};
