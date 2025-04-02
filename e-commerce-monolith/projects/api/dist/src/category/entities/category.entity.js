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
const prisma_product_entity_1 = require("../../product/entities/prisma-product.entity");
class Category {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The unique ID of the category',
        example: 'f6a5d5c0-7e3a-4f1f-9d1e-3e5d8e5f8a3e',
    }),
    __metadata("design:type", String)
], Category.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the category',
        example: 'Mouse',
    }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The image URL of the category',
        example: 'http://www.example.com/imagen1.png',
    }),
    __metadata("design:type", String)
], Category.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date and time the category was created',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], Category.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date and time the category was updated',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], Category.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => prisma_product_entity_1.default,
        isArray: true,
        description: 'The products of the category',
    }),
    __metadata("design:type", Array)
], Category.prototype, "products", void 0);
exports.default = Category;
//# sourceMappingURL=category.entity.js.map