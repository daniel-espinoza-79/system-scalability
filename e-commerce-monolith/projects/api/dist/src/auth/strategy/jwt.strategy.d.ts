import { Strategy } from 'passport-jwt';
import User from '@/user/entities/user.entity';
import UserService from '@/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
declare class JwtStrategy extends JwtStrategy_base {
    private readonly userService;
    constructor(userService: UserService);
    validate(payload: {
        id: string;
    }): Promise<User>;
}
export default JwtStrategy;
