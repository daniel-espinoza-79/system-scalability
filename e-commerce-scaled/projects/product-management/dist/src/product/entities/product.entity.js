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
const swagger_1 = require("@nestjs/swagger");
const prisma_brand_entity_1 = require("../../brand/entities/prisma-brand.entity");
const prisma_category_entity_1 = require("../../category/entities/prisma-category.entity");
const product_image_entity_1 = require("../../product-image/entities/product-image.entity");
const suppliers_only_entity_1 = require("../../products-suppliers/entities/suppliers-only.entity");
class Product {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The unique ID of the product',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], Product.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the product',
        example: 'Laptop',
    }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The description of the product',
        example: 'A powerful laptop for all your needs',
    }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Integer',
        description: 'The stock quantity of the product',
        example: 190,
    }),
    __metadata("design:type", Number)
], Product.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Float',
        description: 'The price of the product',
        example: 999.99,
    }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Boolean',
        description: 'Whether the product is available',
        example: true,
    }),
    __metadata("design:type", Boolean)
], Product.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date the product was created',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], Product.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date the product was updated',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], Product.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The ID of the category of the product',
        example: '123e4567-e89b-12d3-a456-426814174002',
    }),
    __metadata("design:type", String)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The ID of the brand of the product',
        example: '123e4567-e89b-12d3-a456-426814174003',
    }),
    __metadata("design:type", String)
], Product.prototype, "brandId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => prisma_category_entity_1.default,
        description: 'The category of the product',
    }),
    __metadata("design:type", prisma_category_entity_1.default)
], Product.prototype, "category", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => prisma_brand_entity_1.default,
        description: 'The brand of the product',
    }),
    __metadata("design:type", prisma_brand_entity_1.default)
], Product.prototype, "brand", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => product_image_entity_1.default,
        isArray: true,
        description: 'Images associated with the product',
    }),
    __metadata("design:type", Array)
], Product.prototype, "productImages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => suppliers_only_entity_1.default,
        isArray: true,
        description: 'Suppliers associated with the product',
    }),
    __metadata("design:type", Array)
], Product.prototype, "productsSuppliers", void 0);
exports.default = Product;
//# sourceMappingURL=product.entity.js.map