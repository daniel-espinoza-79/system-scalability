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
const cqrs_1 = require("@nestjs/cqrs");
const product_service_1 = require("../../product.service");
const get_products_query_1 = require("./get-products.query");
let GetProductsHandler = class GetProductsHandler {
    constructor(productService) {
        this.productService = productService;
    }
    async execute(query) {
        const products = await this.productService.findAll(query.query);
        return products.map((product) => {
            return {
                id: product.id,
                name: product.name,
                description: product.description,
                stock: product.stock,
                price: product.price,
                isAvailable: product.isAvailable,
                createdAt: product.createdAt,
                category: product.category,
                brand: product.brand,
                productImages: product.productImages,
                suppliers: product.suppliers,
            };
        });
    }
};
GetProductsHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_products_query_1.default),
    __metadata("design:paramtypes", [product_service_1.ProductsService])
], GetProductsHandler);
exports.default = GetProductsHandler;
//# sourceMappingURL=get-products.handler.js.map