import { type UserWithPassword } from '../../../domain/schemas/user.schema';
import { type UserWithPasswordDTO } from '../../dto/user.dto';

export const transformUserBody = (
  body: UserWithPassword
): UserWithPasswordDTO => ({
  nombre: body.name,
  apellido: body.surname,
  correo: body.email,
  contrasena: body.password,
});
