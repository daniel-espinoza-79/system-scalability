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
exports.ProductCreatedHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const product_created_command_1 = require("./product-created.command");
const product_service_1 = require("../../product.service");
const brand_service_1 = require("../../../brand/brand.service");
let ProductCreatedHandler = class ProductCreatedHandler {
    constructor(productService, brandService) {
        this.productService = productService;
        this.brandService = brandService;
    }
    async execute(command) {
        const { product } = command;
        await this.productService.create(product);
        let brand = await this.brandService.findByName(product.brand);
        if (!brand) {
            throw new Error("Brand not found");
        }
        brand.products.unshift({
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.productImages[0],
        });
        if (brand.products.length > 10) {
            brand.products.pop();
        }
        await this.brandService.update(brand.id, brand);
    }
};
exports.ProductCreatedHandler = ProductCreatedHandler;
exports.ProductCreatedHandler = ProductCreatedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(product_created_command_1.ProductCreatedCommand),
    __metadata("design:paramtypes", [product_service_1.ProductsService,
        brand_service_1.BrandsService])
], ProductCreatedHandler);
//# sourceMappingURL=product-created.handler.js.map