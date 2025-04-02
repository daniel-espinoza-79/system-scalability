import { Penalty, Role, UsersProducts, WishList } from '@prisma/client';
declare class User {
    readonly id: string;
    readonly name: string;
    readonly lastName: string;
    readonly email: string;
    readonly password: string;
    readonly role: Role;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly penalty: Penalty;
    readonly wishList: WishList;
    readonly usersProducts: UsersProducts[];
}
export default User;
