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
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
const constants_1 = require("../utils/constants");
let UserService = class UserService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createUserDto) {
        try {
            const hashedPassword = await bcrypt.hash(createUserDto.password, constants_1.HASH_SALT);
            const user = await this.prisma.user.create({
                data: {
                    ...createUserDto,
                    password: hashedPassword,
                },
                include: {
                    penalty: true,
                    wishList: true,
                    purchases: true,
                    usersProducts: true,
                },
            });
            return user;
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.BadRequestException('User email already exists');
            }
            throw new common_1.BadRequestException('Something went wrong');
        }
    }
    async findAll() {
        const users = await this.prisma.user.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                penalty: true,
                wishList: true,
                purchases: true,
                usersProducts: true,
            },
        });
        return users;
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: {
                id,
            },
            include: {
                penalty: true,
                wishList: true,
                purchases: true,
                usersProducts: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.prisma.user.update({
                where: {
                    id,
                },
                data: updateUserDto,
                include: {
                    penalty: true,
                    wishList: true,
                    purchases: true,
                    usersProducts: true,
                },
            });
            return user;
        }
        catch (error) {
            if (error?.code === 'P2002') {
                throw new common_1.BadRequestException('User email already exists');
            }
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
    }
    async remove(id) {
        try {
            const user = await this.prisma.user.delete({
                where: {
                    id,
                },
                include: {
                    penalty: true,
                    wishList: true,
                    purchases: true,
                    usersProducts: true,
                },
            });
            return user;
        }
        catch (error) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
    }
    async findByEmail(email) {
        const user = await this.prisma.user.findUnique({
            where: {
                email,
            },
            include: {
                penalty: true,
                wishList: true,
                purchases: true,
                usersProducts: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${email} not found`);
        }
        return user;
    }
    async comparePassword(password, hashedPassword) {
        const isPasswordValid = await bcrypt.compare(password, hashedPassword);
        return isPasswordValid;
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], UserService);
exports.default = UserService;
//# sourceMappingURL=user.service.js.map