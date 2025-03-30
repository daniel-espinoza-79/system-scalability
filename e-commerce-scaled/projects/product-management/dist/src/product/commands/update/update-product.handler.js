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
const product_mapping_1 = require("../../product.mapping");
const product_service_1 = require("../../product.service");
const product_events_publisher_1 = require("../../product-events.publisher");
const update_product_command_1 = require("./update-product.command");
let UpdateProductHandler = class UpdateProductHandler {
    constructor(productService, mapping, publisher) {
        this.productService = productService;
        this.mapping = mapping;
        this.publisher = publisher;
    }
    async execute(command) {
        await this.productService.update(command.id, command.updateProductDto);
        const product = await this.productService.findOne(command.id);
        this.publisher.publishProductUpdated(this.mapping.mapToSimpleProduct(product, product.category.name, product.brand.name));
        return product;
    }
};
UpdateProductHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_product_command_1.default),
    __metadata("design:paramtypes", [product_service_1.default,
        product_mapping_1.default,
        product_events_publisher_1.default])
], UpdateProductHandler);
exports.default = UpdateProductHandler;
//# sourceMappingURL=update-product.handler.js.map