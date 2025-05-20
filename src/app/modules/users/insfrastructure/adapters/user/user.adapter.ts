import { type User } from '../../../domain/schemas/user.schema';
import { type UserDTO } from '../../dto/user.dto';

export const transformUserDto = (dto: UserDTO): User => ({
  id: dto.id,
  name: dto.nombre,
  surname: dto.apellido,
  email: dto.correo,
});
