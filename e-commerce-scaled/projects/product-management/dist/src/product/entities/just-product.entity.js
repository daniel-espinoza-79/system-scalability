"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JustProduct {
    constructor(id, name, description, stock, price, isAvailable, createdAt, updatedAt, categoryId, brandId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.stock = stock;
        this.price = price;
        this.isAvailable = isAvailable;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.categoryId = categoryId;
        this.brandId = brandId;
    }
}
exports.default = JustProduct;
//# sourceMappingURL=just-product.entity.js.map