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
class PrismaBrand {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        format: 'uuid',
        description: 'The unique ID of the brand',
        example: 'd0f02b9c-1d9a-4f1a-9e2a-3d9a3b0c4c7e',
    }),
    __metadata("design:type", String)
], PrismaBrand.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The name of the brand',
        example: 'Asus',
    }),
    __metadata("design:type", String)
], PrismaBrand.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'String',
        description: 'The logo URL of the brand',
        example: 'https://test-logo.com/test.png',
    }),
    __metadata("design:type", String)
], PrismaBrand.prototype, "logo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date and time the brand was created',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], PrismaBrand.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: 'Date',
        description: 'The date and time the brand was updated',
        example: '2021-01-01T00:00:00.000Z',
    }),
    __metadata("design:type", Date)
], PrismaBrand.prototype, "updatedAt", void 0);
exports.default = PrismaBrand;
//# sourceMappingURL=prisma-brand.entity.js.map