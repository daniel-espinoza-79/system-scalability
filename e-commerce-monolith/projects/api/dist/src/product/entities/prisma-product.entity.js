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
const product_image_entity_1 = require("../../product-image/entities/product-image.entity");
class PrismaProduct {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The unique ID of the product',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], PrismaProduct.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the product',
        example: 'Laptop',
    }),
    __metadata("design:type", String)
], PrismaProduct.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The description of the product',
        example: 'A powerful laptop for all your needs',
    }),
    __metadata("design:type", String)
], PrismaProduct.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Integer',
        description: 'The stock quantity of the product',
        example: 190,
    }),
    __metadata("design:type", Number)
], PrismaProduct.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Float',
        description: 'The price of the product',
        example: 999.99,
    }),
    __metadata("design:type", Number)
], PrismaProduct.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Boolean',
        description: 'Whether the product is available',
        example: true,
    }),
    __metadata("design:type", Boolean)
], PrismaProduct.prototype, "isAvailable", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date the product was created',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], PrismaProduct.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date the product was updated',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], PrismaProduct.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The ID of the category of the product',
        example: '123e4567-e89b-12d3-a456-426814174002',
    }),
    __metadata("design:type", String)
], PrismaProduct.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The ID of the brand of the product',
        example: '123e4567-e89b-12d3-a456-426814174003',
    }),
    __metadata("design:type", String)
], PrismaProduct.prototype, "brandId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => product_image_entity_1.default,
        isArray: true,
        description: 'The images of the product',
    }),
    __metadata("design:type", Array)
], PrismaProduct.prototype, "productImages", void 0);
exports.default = PrismaProduct;
//# sourceMappingURL=prisma-product.entity.js.map