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
exports.ProductDeletedHandler = void 0;
const cqrs_1 = require("@nestjs/cqrs");
const product_deleted_command_1 = require("./product-deleted.command");
const product_service_1 = require("../../product.service");
const brand_service_1 = require("../../../brand/brand.service");
const query_product_dto_1 = require("../../dtos/query-product.dto");
let ProductDeletedHandler = class ProductDeletedHandler {
    constructor(productService, brandService) {
        this.productService = productService;
        this.brandService = brandService;
    }
    async execute(command) {
        const { productId } = command;
        const product = await this.productService.findById(productId);
        await this.productService.delete(productId);
        let brand = await this.brandService.findByName(product.brand);
        if (!brand) {
            throw new Error("Brand not found");
        }
        const index = brand.products.findIndex((p) => p.id === productId);
        if (index !== -1) {
            brand.products.splice(index, 1);
        }
        let queryProductDto = new query_product_dto_1.QueryProductDto();
        queryProductDto.page = 1;
        queryProductDto.limit = 10;
        queryProductDto.brand = product.brand;
        const newBrandProducts = await this.productService.findAll(queryProductDto);
        if (newBrandProducts.length > 0) {
            brand.products = newBrandProducts.map((p) => {
                return {
                    id: p.id,
                    name: p.name,
                    price: p.price,
                    category: p.category,
                    image: p.productImages[0],
                };
            });
        }
        await this.brandService.update(brand.id, brand);
    }
};
exports.ProductDeletedHandler = ProductDeletedHandler;
exports.ProductDeletedHandler = ProductDeletedHandler = __decorate([
    (0, cqrs_1.CommandHandler)(product_deleted_command_1.ProductDeletedCommand),
    __metadata("design:paramtypes", [product_service_1.ProductsService,
        brand_service_1.BrandsService])
], ProductDeletedHandler);
//# sourceMappingURL=product-deleted.handler.js.map