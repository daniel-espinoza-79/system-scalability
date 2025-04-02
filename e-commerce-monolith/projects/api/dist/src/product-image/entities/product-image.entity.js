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
class ProductImage {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'The product image id',
        example: '123e4567-e89b-1r33-a456-426814174001',
    }),
    __metadata("design:type", String)
], ProductImage.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        format: 'URL',
        description: 'The product image URL',
        example: 'https://example.com/image.png',
    }),
    __metadata("design:type", String)
], ProductImage.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date and time when the product image was created',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], ProductImage.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date and time when the product image was updated',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], ProductImage.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'The product id',
        example: '123e4567-e89b-1r33-a456-426814174001',
    }),
    __metadata("design:type", String)
], ProductImage.prototype, "productId", void 0);
exports.default = ProductImage;
//# sourceMappingURL=product-image.entity.js.map