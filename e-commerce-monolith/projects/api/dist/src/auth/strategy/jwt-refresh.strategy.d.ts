import { Strategy } from 'passport-jwt';
import User from '@/user/entities/user.entity';
import UserService from '@/user/user.service';
declare const JwtRefreshStrategy_base: new (...args: any[]) => Strategy;
declare class JwtRefreshStrategy extends JwtRefreshStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: {
        id: string;
    }): Promise<User>;
}
export default JwtRefreshStrategy;
