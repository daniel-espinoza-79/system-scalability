import { JwtService } from '@nestjs/jwt';
import CreateUserDto from '@/user/dto/create-user.dto';
import User from '@/user/entities/user.entity';
import UserService from '@/user/user.service';
import LoginDto from './dto/login.dto';
import Auth from './entities/auth.entity';
declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    register(createUserDto: CreateUserDto): Promise<Auth>;
    login(loginDto: LoginDto): Promise<Auth>;
    validateUser(loginDto: LoginDto): Promise<User>;
    validateUserWithId(id: string): Promise<User>;
    generateToken(user: User, refreshToken?: string): Promise<Auth>;
    refreshToken(refreshToken: string): Promise<Auth>;
}
export default AuthService;
