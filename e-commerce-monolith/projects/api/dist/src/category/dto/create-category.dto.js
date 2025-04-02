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
class CreateCategoryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the category',
        example: 'Mouse',
    }),
    (0, class_validator_1.Matches)(constants_1.NAME_VALIDATOR, {
        message: 'The category name must only contain letters and spaces',
    }),
    (0, class_validator_1.MaxLength)(30, {
        message: 'The category name must be at most 30 characters long',
    }),
    (0, class_validator_1.MinLength)(4, {
        message: 'The category name must be at least 4 characters long',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The category name must not be empty',
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' ')),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsString)({
        message: 'The category name must be a string',
    }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The image URL of the category',
        example: 'http://www.example.com/imagen1.png',
    }),
    (0, class_validator_1.IsUrl)({
        require_protocol: true,
        require_valid_protocol: true,
    }, {
        message: 'The category image URL must be a valid URL',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The category image URL must not be empty',
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' ')),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsString)({
        message: 'The category image URL must be a string',
    }),
    __metadata("design:type", String)
], CreateCategoryDto.prototype, "image", void 0);
exports.default = CreateCategoryDto;
//# sourceMappingURL=create-category.dto.js.map