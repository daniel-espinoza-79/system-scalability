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
const client_1 = require("@prisma/client");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const constants_1 = require("../../utils/constants");
class CreateUserDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the user',
        example: 'John',
    }),
    (0, class_validator_1.Matches)(constants_1.NAME_VALIDATOR, {
        message: 'The name must contain only letters and spaces',
        groups: ['validate'],
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The name must not be empty',
        groups: ['validate'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), {
        groups: ['transform'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), {
        groups: ['transform'],
    }),
    (0, class_validator_1.IsString)({
        message: 'The name must be a string',
        groups: ['validate'],
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The last name of the user',
        example: 'Doe',
    }),
    (0, class_validator_1.Matches)(constants_1.NAME_VALIDATOR, {
        message: 'The last name must contain only letters and spaces',
        groups: ['validate'],
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The last name must not be empty',
        groups: ['validate'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), {
        groups: ['transform'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), {
        groups: ['transform'],
    }),
    (0, class_validator_1.IsString)({
        message: 'The last name must be a string',
        groups: ['validate'],
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The email of the user',
        example: 'john.doe@gmail.com',
    }),
    (0, class_validator_1.IsEmail)({}, {
        message: 'The email must be a valid email address',
        groups: ['validate'],
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The email must not be empty',
        groups: ['validate'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), {
        groups: ['transform'],
    }),
    (0, class_validator_1.IsString)({
        message: 'The email must be a string',
        groups: ['validate'],
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The password of the user',
        example: 'Ababd123',
    }),
    (0, class_validator_1.Matches)(constants_1.PASSWORD_VALIDATOR, {
        message: 'The password only accepts letters, and numbers',
        groups: ['validate'],
    }),
    (0, class_validator_1.Length)(8, 12, {
        message: 'The password must be between 8 and 12 characters',
        groups: ['validate'],
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The password must not be empty',
        groups: ['validate'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), {
        groups: ['transform'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), {
        groups: ['transform'],
    }),
    (0, class_validator_1.IsString)({
        message: 'The password must be a string',
        groups: ['validate'],
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        enum: client_1.Role,
        description: 'The role of the user',
        example: 'ADMIN',
    }),
    (0, class_validator_1.IsEnum)(client_1.Role, {
        message: 'The role must be a valid role',
        groups: ['validate'],
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The role must not be empty',
        groups: ['validate'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' '), {
        groups: ['transform'],
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.trim(), {
        groups: ['transform'],
    }),
    (0, class_validator_1.IsString)({
        message: 'The role must be a string',
        groups: ['validate'],
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "role", void 0);
exports.default = CreateUserDto;
//# sourceMappingURL=create-user.dto.js.map