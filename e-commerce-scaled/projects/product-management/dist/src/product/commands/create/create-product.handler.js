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
const brand_service_1 = require("../../../brand/brand.service");
const category_service_1 = require("../../../category/category.service");
const product_mapping_1 = require("../../product.mapping");
const product_events_publisher_1 = require("../../product-events.publisher");
const product_service_1 = require("../../product.service");
const create_product_command_1 = require("./create-product.command");
let CreateProductHandler = class CreateProductHandler {
    constructor(productService, publisher, categoryService, brandService, productMapping) {
        this.productService = productService;
        this.publisher = publisher;
        this.categoryService = categoryService;
        this.brandService = brandService;
        this.productMapping = productMapping;
    }
    async execute(command) {
        const product = await this.productService.create(command.createProductDto);
        const category = await this.categoryService.findOne(product.categoryId);
        const brand = await this.brandService.findOne(product.brandId);
        this.publisher.publishProductCreated(this.productMapping.mapToSimpleProduct(product, category.name, brand.name));
        return product;
    }
};
CreateProductHandler = __decorate([
    (0, cqrs_1.CommandHandler)(create_product_command_1.default),
    __metadata("design:paramtypes", [product_service_1.default,
        product_events_publisher_1.default,
        category_service_1.default,
        brand_service_1.default,
        product_mapping_1.default])
], CreateProductHandler);
exports.default = CreateProductHandler;
//# sourceMappingURL=create-product.handler.js.map