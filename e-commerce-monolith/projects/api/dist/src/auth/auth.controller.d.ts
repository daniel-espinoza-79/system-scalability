import CreateUserDto from '@/user/dto/create-user.dto';
import AuthService from './auth.service';
import LoginDto from './dto/login.dto';
import RefreshTokenDto from './dto/refresh-token.dto';
import Auth from './entities/auth.entity';
declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<Auth>;
    register(createUserDto: CreateUserDto): Promise<Auth>;
    refreshToken(refreshToken: RefreshTokenDto): Promise<Auth>;
}
export default AuthController;
