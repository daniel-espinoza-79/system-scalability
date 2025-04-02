import User from '@/user/entities/user.entity';
declare class Auth {
    readonly token: string;
    readonly refreshToken: string;
    readonly user: User;
}
export default Auth;
