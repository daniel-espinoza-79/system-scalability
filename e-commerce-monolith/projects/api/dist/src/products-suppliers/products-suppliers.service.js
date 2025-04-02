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
let ProductsSuppliersService = class ProductsSuppliersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductsSupplierDto) {
        try {
            const productsSupplier = await this.prisma.productsSuppliers.create({
                data: createProductsSupplierDto,
            });
            return productsSupplier;
        }
        catch (error) {
            throw new common_1.BadRequestException('Something went wrong');
        }
    }
    async findAll() {
        const productsSuppliers = await this.prisma.productsSuppliers.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return productsSuppliers;
    }
    async findOne(productId, supplierId) {
        const productsSupplier = await this.prisma.productsSuppliers.findUnique({
            where: {
                productId_supplierId: {
                    productId,
                    supplierId,
                },
            },
        });
        if (!productsSupplier) {
            throw new common_1.NotFoundException(`Products supplier with ${productId} and ${supplierId} not found`);
        }
        return productsSupplier;
    }
    async update(productId, supplierId, updateProductsSupplierDto) {
        try {
            const productsSupplier = await this.prisma.productsSuppliers.update({
                where: {
                    productId_supplierId: {
                        productId,
                        supplierId,
                    },
                },
                data: updateProductsSupplierDto,
            });
            return productsSupplier;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Products supplier with ${productId} and ${supplierId} not found`);
        }
    }
    async remove(productId, supplierId) {
        try {
            const productsSupplier = await this.prisma.productsSuppliers.delete({
                where: {
                    productId_supplierId: {
                        productId,
                        supplierId,
                    },
                },
            });
            return productsSupplier;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Products supplier with ${productId} and ${supplierId} not found`);
        }
    }
};
ProductsSuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], ProductsSuppliersService);
exports.default = ProductsSuppliersService;
//# sourceMappingURL=products-suppliers.service.js.map