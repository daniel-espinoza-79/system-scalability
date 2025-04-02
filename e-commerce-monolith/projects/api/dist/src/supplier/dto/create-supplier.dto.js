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
class CreateSupplierDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The supplier email',
        example: 'intel@gmail.com',
    }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9]+([_]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/, {
        message: 'Invalid email format. Only @ . and _ before the @ are allowed as special characters.',
    }),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The supplier email must not be empty',
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' ')),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsString)({
        message: 'The supplier email must be a string',
    }),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Integer',
        description: 'The supplier delivery time in days',
        example: '5',
    }),
    (0, class_validator_1.Max)(180, {
        message: 'The supplier delivery time must be at most 180',
    }),
    (0, class_validator_1.IsPositive)({
        message: 'The supplier delivery time must be a positive number',
    }),
    (0, class_validator_1.IsInt)({
        message: 'The supplier delivery time must be an integer number',
    }),
    __metadata("design:type", Number)
], CreateSupplierDto.prototype, "deliveryTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The supplier country ID',
        example: '123e4567-e89b-12d3-a456-426814174001',
    }),
    (0, class_validator_1.Matches)(/^[a-zA-Z0-9-]/, {
        message: 'The country ID must contain only alphanumeric characters and -',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The supplier country ID must not be empty',
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' ')),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsString)({
        message: 'The supplier country ID must be a string',
    }),
    __metadata("design:type", String)
], CreateSupplierDto.prototype, "countryId", void 0);
exports.default = CreateSupplierDto;
//# sourceMappingURL=create-supplier.dto.js.map