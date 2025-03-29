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
const constants_1 = require("../../utils/constants");
class CreateProductDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the Product',
        example: 'Keyboard Red Dragon',
    }),
    (0, class_validator_1.Matches)(constants_1.PRODUCT_NAME_VALIDATOR, {
        message: 'The product name must only contain letters, numbers, blank spaces and hyphens.',
        groups: ['validator'],
    }),
    (0, class_validator_1.Length)(3, 50, {
        message: 'The product name must be between 3 and 50 characters',
        groups: ['validator'],
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The product name must not be empty',
        groups: ['validator'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), { groups: ['transform'] }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), { groups: ['transform'] }),
    (0, class_validator_1.IsString)({
        message: 'The product name must be a string',
        groups: ['validator'],
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The description of the product',
        example: 'Experience cable-free freedom and exceptional performance with our Wireless RGB Mechanical Keyboard. Its high-quality switches provide precise tactile responses, while the customizable RGB backlight adds a stylish touch to your workspace. With low-latency wireless connectivity, outstanding durability, and an ergonomic design, this keyboard is the perfect choice for gamers and professionals seeking the ideal balance of form and function.',
    }),
    (0, class_validator_1.Length)(1, 1000, {
        message: 'The product description must be between 1 and 1000 characters',
        groups: ['validator'],
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The product name must not be empty',
        groups: ['validator'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), { groups: ['transform'] }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), { groups: ['transform'] }),
    (0, class_validator_1.IsString)({
        message: 'The product name must be a string',
        groups: ['validator'],
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Integer',
        description: 'The stock of the product',
        example: '190',
    }),
    (0, class_validator_1.Min)(1, {
        message: 'The product stock must be at most 1',
    }),
    (0, class_validator_1.IsPositive)({
        message: 'The product stock must be a positive number',
    }),
    (0, class_validator_1.IsNumber)({
        allowInfinity: false,
        allowNaN: false,
    }, {
        message: 'The product stock must be a number',
    }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "stock", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Float',
        description: 'The price of the product',
        example: '156.50',
    }),
    (0, class_validator_1.Min)(1, {
        message: 'The product price must be at most 1.00',
    }),
    (0, class_validator_1.IsPositive)({
        message: 'The price must be a positive number',
    }),
    (0, class_validator_1.IsNumber)({
        maxDecimalPlaces: 2,
    }, {
        message: 'The price must be a number, and have at most 2 decimal places',
    }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The product category ID',
        example: '123e4567-e89b-1r33-a456-426814174001',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The product category ID must not be empty',
        groups: ['validator'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), {
        groups: ['transform'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), {
        groups: ['transform'],
    }),
    (0, class_validator_1.IsString)({
        message: 'The product category ID must be a string',
        groups: ['validator'],
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "categoryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The product brand ID',
        example: '123e4567-e89b-12d3-a456-408814174001',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The product brand ID must not be empty',
        groups: ['validator'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), {
        groups: ['transform'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), {
        groups: ['transform'],
    }),
    (0, class_validator_1.IsString)({
        message: 'The product brand ID must be a string',
        groups: ['validator'],
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "brandId", void 0);
exports.default = CreateProductDto;
//# sourceMappingURL=create-product.dto.js.map