import { Role } from '@prisma/client';
declare class UpdateUserDto {
    readonly name?: string;
    readonly lastName?: string;
    readonly email?: string;
    readonly password?: string;
    readonly role?: Role;
}
export default UpdateUserDto;
