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
let BrandService = class BrandService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBrandDto) {
        try {
            const brand = await this.prisma.brand.create({
                data: createBrandDto,
                include: {
                    products: {
                        orderBy: {
                            stock: 'desc',
                        },
                        include: {
                            category: true,
                            productImages: {
                                orderBy: {
                                    createdAt: 'desc',
                                },
                            },
                        },
                    },
                },
            });
            return brand;
        }
        catch (error) {
            if (error?.meta?.target?.includes('name')) {
                throw new common_1.BadRequestException('Brand name already exists');
            }
            throw new common_1.BadRequestException('Something went wrong');
        }
    }
    async findAll() {
        const brands = await this.prisma.brand.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                products: {
                    orderBy: {
                        stock: 'desc',
                    },
                    include: {
                        category: true,
                        productImages: {
                            orderBy: {
                                createdAt: 'desc',
                            },
                        },
                    },
                },
            },
        });
        return brands;
    }
    async findOne(id) {
        const brand = await this.prisma.brand.findUnique({
            where: { id },
            include: {
                products: {
                    orderBy: {
                        stock: 'desc',
                    },
                    include: {
                        category: true,
                        productImages: {
                            orderBy: {
                                createdAt: 'desc',
                            },
                        },
                    },
                },
            },
        });
        if (!brand) {
            throw new common_1.NotFoundException(`Brand with ID ${id} not found`);
        }
        return brand;
    }
    async update(id, updateBrandDto) {
        try {
            const brand = await this.prisma.brand.update({
                where: {
                    id,
                },
                data: updateBrandDto,
                include: {
                    products: {
                        orderBy: {
                            stock: 'desc',
                        },
                        include: {
                            category: true,
                            productImages: {
                                orderBy: {
                                    createdAt: 'desc',
                                },
                            },
                        },
                    },
                },
            });
            return brand;
        }
        catch (error) {
            if (error?.meta?.target?.includes('name')) {
                throw new common_1.BadRequestException('Brand name already exists');
            }
            throw new common_1.NotFoundException(`Brand with ID ${id} not found`);
        }
    }
    async remove(id) {
        try {
            const brand = await this.prisma.brand.delete({
                where: {
                    id,
                },
                include: {
                    products: {
                        orderBy: {
                            stock: 'desc',
                        },
                        include: {
                            category: true,
                            productImages: {
                                orderBy: {
                                    createdAt: 'desc',
                                },
                            },
                        },
                    },
                },
            });
            return brand;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Brand with ID ${id} not found`);
        }
    }
};
BrandService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], BrandService);
exports.default = BrandService;
//# sourceMappingURL=brand.service.js.map