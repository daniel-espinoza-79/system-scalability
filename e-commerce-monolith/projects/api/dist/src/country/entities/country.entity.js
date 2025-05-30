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
class Country {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The unique ID of the country',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], Country.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the country',
        example: 'United States',
    }),
    __metadata("design:type", String)
], Country.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Float',
        description: 'The tax of the country',
        example: '0.07',
    }),
    __metadata("design:type", Number)
], Country.prototype, "tax", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date and time the country was created',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], Country.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date and time the country was updated',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], Country.prototype, "updatedAt", void 0);
exports.default = Country;
//# sourceMappingURL=country.entity.js.map