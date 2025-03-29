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
const country_entity_1 = require("../../country/entities/country.entity");
class Supplier {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The unique ID of the supplier',
        example: '123e4567-e89b-12d3-a456-426614174000',
    }),
    __metadata("design:type", String)
], Supplier.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The email of the supplier',
        example: 'intel@gmail.com',
    }),
    __metadata("design:type", String)
], Supplier.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Integer',
        description: 'The delivery time in days for the product',
        example: '5',
    }),
    __metadata("design:type", Number)
], Supplier.prototype, "deliveryTime", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date the supplier was created',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], Supplier.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date the supplier was updated',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], Supplier.prototype, "updatedAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The ID of the country of the supplier',
        example: '123e4567-e89b-12d3-a456-426814174001',
    }),
    __metadata("design:type", String)
], Supplier.prototype, "countryId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => country_entity_1.default,
        description: 'The country of the supplier',
    }),
    __metadata("design:type", country_entity_1.default)
], Supplier.prototype, "country", void 0);
exports.default = Supplier;
//# sourceMappingURL=supplier.entity.js.map