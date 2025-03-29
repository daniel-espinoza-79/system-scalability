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
let ProductService = class ProductService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createProductDto) {
        try {
            const product = await this.prisma.product.create({
                data: createProductDto,
                include: {
                    category: true,
                    brand: true,
                    productImages: true,
                    productsSuppliers: {
                        select: {
                            supplier: {
                                include: {
                                    country: true,
                                },
                            },
                        },
                        orderBy: {
                            supplier: {
                                country: {
                                    tax: 'asc',
                                },
                            },
                        },
                    },
                },
            });
            return product;
        }
        catch (error) {
            if (error?.meta?.target?.includes('name')) {
                throw new common_1.BadRequestException('Product name already exists');
            }
            else {
                throw new common_1.BadRequestException('Something went wrong');
            }
        }
    }
    async findAll() {
        const products = await this.prisma.product.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                category: true,
                brand: true,
                productImages: true,
                productsSuppliers: {
                    select: {
                        supplier: {
                            include: {
                                country: true,
                            },
                        },
                    },
                    orderBy: {
                        supplier: {
                            country: {
                                tax: 'asc',
                            },
                        },
                    },
                },
            },
        });
        return products;
    }
    async findOne(id) {
        const product = await this.prisma.product.findUnique({
            where: {
                id,
            },
            include: {
                category: true,
                brand: true,
                productImages: true,
                productsSuppliers: {
                    select: {
                        supplier: {
                            include: {
                                country: true,
                            },
                        },
                    },
                    orderBy: {
                        supplier: {
                            country: {
                                tax: 'asc',
                            },
                        },
                    },
                },
            },
        });
        if (!product) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
        return product;
    }
    async update(id, updateProductDto) {
        try {
            const product = await this.prisma.product.update({
                where: {
                    id,
                },
                data: updateProductDto,
                include: {
                    category: true,
                    brand: true,
                    productImages: true,
                    productsSuppliers: {
                        select: {
                            supplier: {
                                include: {
                                    country: true,
                                },
                            },
                        },
                        orderBy: {
                            supplier: {
                                country: {
                                    tax: 'asc',
                                },
                            },
                        },
                    },
                },
            });
            return product;
        }
        catch (error) {
            if (error?.meta?.target?.includes('name')) {
                throw new common_1.BadRequestException('Product name already exists');
            }
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
    }
    async remove(id) {
        try {
            const product = await this.prisma.product.delete({
                where: {
                    id,
                },
                include: {
                    category: true,
                    brand: true,
                    productImages: true,
                    productsSuppliers: {
                        select: {
                            supplier: {
                                include: {
                                    country: true,
                                },
                            },
                        },
                        orderBy: {
                            supplier: {
                                country: {
                                    tax: 'asc',
                                },
                            },
                        },
                    },
                },
            });
            return product;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Product with ID ${id} not found`);
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], ProductService);
exports.default = ProductService;
//# sourceMappingURL=product.service.js.map