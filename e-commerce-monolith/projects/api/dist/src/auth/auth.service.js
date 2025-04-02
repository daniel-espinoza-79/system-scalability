"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const user_service_1 = require("../user/user.service");
const constants_1 = require("../utils/constants");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async register(createUserDto) {
        const user = await this.userService.create(createUserDto);
        const token = await this.generateToken(user);
        return token;
    }
    async login(loginDto) {
        const user = await this.validateUser(loginDto);
        const token = await this.generateToken(user);
        return token;
    }
    async validateUser(loginDto) {
        const { email, password } = loginDto;
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid Credentials');
        }
        const isPasswordValid = await this.userService.comparePassword(password, user.password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Invalid Credentials');
        }
        return user;
    }
    async validateUserWithId(id) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid Credentials');
        }
        return user;
    }
    async generateToken(user, refreshToken) {
        const payload = {
            id: user.id,
            role: user.role,
        };
        return {
            token: await this.jwtService.signAsync(payload, { secret: constants_1.JWT_SECRET, expiresIn: constants_1.JWT_EXPIRES_IN }),
            refreshToken: refreshToken ||
                (await this.jwtService.signAsync(payload, { secret: constants_1.JWT_REFRESH_SECRET, expiresIn: constants_1.JWT_REFRESH_EXPIRES_IN })),
            user,
        };
    }
    async refreshToken(refreshToken) {
        const payload = await this.jwtService.verifyAsync(refreshToken, {
            secret: constants_1.JWT_REFRESH_SECRET,
        });
        const user = await this.validateUserWithId(payload.id);
        const token = await this.generateToken(user, refreshToken);
        return token;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.default,
        jwt_1.JwtService])
], AuthService);
exports.default = AuthService;
//# sourceMappingURL=auth.service.js.map