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
let ProductImageService = class ProductImageService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductImageDto) {
        try {
            const productImage = await this.prisma.productImage.create({
                data: createProductImageDto,
            });
            return productImage;
        }
        catch (error) {
            throw new common_1.BadRequestException('Something went wrong');
        }
    }
    async findAll() {
        const productImages = await this.prisma.productImage.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return productImages;
    }
    async findOne(id) {
        const productImage = await this.prisma.productImage.findUnique({
            where: {
                id,
            },
        });
        if (!productImage) {
            throw new common_1.NotFoundException(`Product image with ${id} not found`);
        }
        return productImage;
    }
    async update(id, updateProductImageDto) {
        try {
            const productImage = await this.prisma.productImage.update({
                where: {
                    id,
                },
                data: updateProductImageDto,
            });
            return productImage;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Product image with ${id} not found`);
        }
    }
    async remove(id) {
        try {
            const productImage = await this.prisma.productImage.delete({
                where: {
                    id,
                },
            });
            return productImage;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Product image with ${id} not found`);
        }
    }
};
ProductImageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], ProductImageService);
exports.default = ProductImageService;
//# sourceMappingURL=product-image.service.js.map