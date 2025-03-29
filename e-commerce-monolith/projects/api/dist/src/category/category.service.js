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
let CategoryService = class CategoryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCategoryDto) {
        try {
            const category = await this.prisma.category.create({
                data: createCategoryDto,
                include: {
                    products: {
                        orderBy: {
                            stock: 'desc',
                        },
                        include: {
                            productImages: {
                                orderBy: {
                                    createdAt: 'desc',
                                },
                            },
                        },
                    },
                },
            });
            return category;
        }
        catch (error) {
            if (error?.meta?.target?.includes('name')) {
                throw new common_1.BadRequestException('Category name already exists');
            }
            else {
                throw new common_1.BadRequestException('Something went wrong');
            }
        }
    }
    async findAll() {
        const categories = await this.prisma.category.findMany({
            orderBy: {
                name: 'asc',
            },
            include: {
                products: {
                    orderBy: {
                        stock: 'desc',
                    },
                    include: {
                        productImages: {
                            orderBy: {
                                createdAt: 'desc',
                            },
                        },
                    },
                },
            },
        });
        return categories;
    }
    async findOne(id) {
        const category = await this.prisma.category.findUnique({
            where: { id },
            include: {
                products: {
                    orderBy: {
                        stock: 'desc',
                    },
                    include: {
                        productImages: {
                            orderBy: {
                                createdAt: 'desc',
                            },
                        },
                    },
                },
            },
        });
        if (!category) {
            throw new common_1.NotFoundException(`Category with ID ${id} not found`);
        }
        return category;
    }
    async update(categoryId, updateCategoryDto) {
        try {
            const updatedCategory = await this.prisma.category.update({
                where: {
                    id: categoryId,
                },
                data: updateCategoryDto,
                include: {
                    products: {
                        orderBy: {
                            stock: 'desc',
                        },
                        include: {
                            productImages: {
                                orderBy: {
                                    createdAt: 'desc',
                                },
                            },
                        },
                    },
                },
            });
            return updatedCategory;
        }
        catch (error) {
            if (error?.meta?.target?.includes('name')) {
                throw new common_1.BadRequestException('Category name already exists');
            }
            else {
                throw new common_1.NotFoundException(`Category with ID ${categoryId} not found`);
            }
        }
    }
    async remove(id) {
        try {
            const deletedCategory = await this.prisma.category.delete({
                where: { id },
                include: {
                    products: {
                        orderBy: {
                            stock: 'desc',
                        },
                        include: {
                            productImages: {
                                orderBy: {
                                    createdAt: 'desc',
                                },
                            },
                        },
                    },
                },
            });
            return deletedCategory;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Category with ID ${id} not found`);
        }
    }
};
CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], CategoryService);
exports.default = CategoryService;
//# sourceMappingURL=category.service.js.map