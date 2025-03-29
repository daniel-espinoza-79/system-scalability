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
class CreateCountryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the country',
        example: 'United States',
    }),
    (0, class_validator_1.Matches)(constants_1.NAME_VALIDATOR, {
        message: 'The country name must contain only letters and spaces',
    }),
    (0, class_validator_1.MaxLength)(20, {
        message: 'The country name must be at most 20 characters',
    }),
    (0, class_validator_1.MinLength)(3, {
        message: 'The country name must be at least 3 characters',
    }),
    (0, class_validator_1.IsNotEmpty)({
        message: 'The country name must not be empty',
    }),
    (0, class_transformer_1.Transform)(({ value }) => value.replace(/\s+/g, ' ')),
    (0, class_transformer_1.Transform)(({ value }) => value.trim()),
    (0, class_validator_1.IsString)({
        message: 'The country name must be a string',
    }),
    __metadata("design:type", String)
], CreateCountryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Float',
        description: 'The tax of the country',
        example: '0.07',
    }),
    (0, class_validator_1.Max)(50, {
        message: 'The country tax must be at most 50',
    }),
    (0, class_validator_1.IsPositive)({
        message: 'The country tax must be a positive number',
    }),
    (0, class_validator_1.IsNumber)({
        maxDecimalPlaces: 2,
    }, {
        message: 'The country tax must be a number, and have at most 2 decimal places',
    }),
    __metadata("design:type", Number)
], CreateCountryDto.prototype, "tax", void 0);
exports.default = CreateCountryDto;
//# sourceMappingURL=create-country.dto.js.map