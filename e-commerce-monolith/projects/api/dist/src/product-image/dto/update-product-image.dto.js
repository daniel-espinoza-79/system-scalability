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
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class UpdateProductImageDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        format: 'URL',
        description: 'The product image URL',
        example: 'https://example.com/image.png',
    }),
    (0, class_validator_1.IsUrl)({
        require_protocol: true,
        require_valid_protocol: true,
    }, {
        message: 'The product image URL must be a valid URL',
        groups: ['validate'],
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The product image URL is required',
        groups: ['validate'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), { groups: ['transform'] }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), { groups: ['transform'] }),
    (0, class_validator_1.IsString)({
        message: 'The product image URL must be a string',
        groups: ['validate'],
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductImageDto.prototype, "image", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'string',
        description: 'The product id',
        example: '123e4567-e89b-1r33-a456-426814174001',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The product id is required',
        groups: ['validate'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), { groups: ['transform'] }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), { groups: ['transform'] }),
    (0, class_validator_1.IsString)({
        message: 'The product id must be a string',
        groups: ['validate'],
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductImageDto.prototype, "productId", void 0);
exports.default = UpdateProductImageDto;
//# sourceMappingURL=update-product-image.dto.js.map