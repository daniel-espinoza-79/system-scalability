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
const prisma_category_entity_1 = require("../../category/entities/prisma-category.entity");
const prisma_product_entity_1 = require("./prisma-product.entity");
class PrismaCategoryProduct extends prisma_product_entity_1.default {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        type: () => prisma_category_entity_1.default,
        description: 'The category of the product',
    }),
    __metadata("design:type", prisma_category_entity_1.default)
], PrismaCategoryProduct.prototype, "category", void 0);
exports.default = PrismaCategoryProduct;
//# sourceMappingURL=prisma-category-product.entity.js.map