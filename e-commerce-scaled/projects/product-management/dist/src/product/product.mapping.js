"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ProductMapping = class ProductMapping {
    mapToSimpleProduct(product, category, brand, supplier) {
        return {
            id: product.id,
            name: product.name,
            description: product.description,
            stock: product.stock,
            price: product.price,
            isAvailable: product.isAvailable,
            createdAt: product.createdAt,
            category: category ?? '',
            brand: brand ?? '',
            productImages: product.productImages ? product.productImages.map((image) => image.image) : [],
            suppliers: supplier,
        };
    }
};
ProductMapping = __decorate([
    (0, common_1.Injectable)()
], ProductMapping);
exports.default = ProductMapping;
//# sourceMappingURL=product.mapping.js.map