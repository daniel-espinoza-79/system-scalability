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
const get_product_query_1 = require("./get-product.query");
const suppliers_service_1 = require("../../../suppliers/suppliers.service");
const product_dto_1 = require("../../dtos/product.dto");
let GetProductHandler = class GetProductHandler {
    constructor(productService, supplierService) {
        this.productService = productService;
        this.supplierService = supplierService;
    }
    async execute(query) {
        let product = await this.productService.findById(query.id);
        const suppliers = await this.supplierService.findByNames(product.suppliers);
        let productDto = new product_dto_1.ProductDto();
        productDto.id = product.id;
        productDto.name = product.name;
        productDto.description = product.description;
        productDto.stock = product.stock;
        productDto.price = product.price;
        productDto.isAvailable = product.isAvailable;
        productDto.createdAt = product.createdAt;
        productDto.category = product.category;
        productDto.brand = product.brand;
        productDto.productImages = product.productImages;
        productDto.suppliers = suppliers.map((supplier) => {
            return {
                id: supplier.id,
                name: supplier.name,
                email: supplier.email,
                deliveryTime: supplier.deliveryTime,
                tax: supplier.tax,
            };
        });
        return productDto;
    }
};
GetProductHandler = __decorate([
    (0, cqrs_1.QueryHandler)(get_product_query_1.default),
    __metadata("design:paramtypes", [product_service_1.ProductsService,
        suppliers_service_1.SuppliersService])
], GetProductHandler);
exports.default = GetProductHandler;
//# sourceMappingURL=get-product.handler.js.map