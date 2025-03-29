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
const prisma_service_1 = require("../prisma/prisma.service");
let SupplierService = class SupplierService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createSupplierDto) {
        try {
            const supplier = await this.prisma.supplier.create({
                data: createSupplierDto,
                include: {
                    country: true,
                },
            });
            return supplier;
        }
        catch (error) {
            if (!error.code) {
                throw new common_1.BadRequestException('Something went wrong');
            }
            if (error?.code === 'P2002') {
                throw new common_1.BadRequestException('Supplier email already exists');
            }
            if (error?.code === 'P2023') {
                throw new common_1.NotFoundException('Country ID not found');
            }
            throw new common_1.BadRequestException('Something went wrong');
        }
    }
    async findAll() {
        const suppliers = await this.prisma.supplier.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                country: true,
            },
        });
        return suppliers;
    }
    async findOne(id) {
        try {
            const supplier = await this.prisma.supplier.findUnique({
                where: {
                    id,
                },
                include: {
                    country: true,
                },
            });
            return supplier;
        }
        catch (error) {
            if (!error.code) {
                throw new common_1.BadRequestException('Something went wrong');
            }
            if (error?.code === 'P2023') {
                throw new common_1.NotFoundException(`Supplier with ID ${id} not found`);
            }
            throw new common_1.BadRequestException('Something went wrong');
        }
    }
    async update(id, updateSupplierDto) {
        try {
            const supplier = await this.prisma.supplier.update({
                where: {
                    id,
                },
                data: updateSupplierDto,
                include: {
                    country: true,
                },
            });
            return supplier;
        }
        catch (error) {
            if (!error.code) {
                throw new common_1.BadRequestException('Something went wrong');
            }
            if (error?.code === 'P2002') {
                throw new common_1.BadRequestException('Supplier email already exists');
            }
            if (error?.code === 'P2023') {
                throw new common_1.BadRequestException('Country ID not found');
            }
            throw new common_1.BadRequestException('Something went wrong');
        }
    }
    async remove(id) {
        try {
            const supplier = await this.prisma.supplier.delete({
                where: {
                    id,
                },
                include: {
                    country: true,
                },
            });
            return supplier;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Supplier with ID ${id} not found`);
        }
    }
};
SupplierService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], SupplierService);
exports.default = SupplierService;
//# sourceMappingURL=supplier.service.js.map