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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const swagger_1 = require("@nestjs/swagger");
const get_products_query_1 = require("./queries/get-all/get-products.query");
const get_product_query_1 = require("./queries/get-by-id/get-product.query");
const product_dto_1 = require("./dtos/product.dto");
const simple_product_1 = require("./dtos/simple-product");
const query_product_dto_1 = require("./dtos/query-product.dto");
const microservices_1 = require("@nestjs/microservices");
const product_created_command_1 = require("./commands/create/product-created.command");
const product_updated_command_1 = require("./commands/update/product-updated.command");
const product_deleted_command_1 = require("./commands/delete/product-deleted.command");
const update_stocks_command_1 = require("./commands/update-stocks/update-stocks.command");
let ProductController = class ProductController {
    constructor(commandBus, queryBus) {
        this.commandBus = commandBus;
        this.queryBus = queryBus;
    }
    async findAll(query) {
        return this.queryBus.execute(new get_products_query_1.default(query));
    }
    async findOne(id) {
        return this.queryBus.execute(new get_product_query_1.default(id));
    }
    async handleProductCreated(product) {
        await this.commandBus.execute(new product_created_command_1.ProductCreatedCommand(product));
    }
    async handleUpdateProduct(product) {
        await this.commandBus.execute(new product_updated_command_1.ProductUpdatedCommand(product));
    }
    async handleDeleteProduct({ id }) {
        await this.commandBus.execute(new product_deleted_command_1.ProductDeletedCommand(id));
    }
    async handleStockUpdate(orderItems) {
        await this.commandBus.execute(new update_stocks_command_1.default(orderItems));
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: "Get all products" }),
    (0, swagger_1.ApiCreatedResponse)({ type: simple_product_1.SimpleProductDto, isArray: true }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [query_product_dto_1.QueryProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(":id"),
    (0, swagger_1.ApiOperation)({ summary: "Get a product by id" }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_dto_1.ProductDto }),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findOne", null);
__decorate([
    (0, microservices_1.MessagePattern)("product.created"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [simple_product_1.SimpleProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "handleProductCreated", null);
__decorate([
    (0, microservices_1.MessagePattern)("product.updated"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [simple_product_1.SimpleProductDto]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "handleUpdateProduct", null);
__decorate([
    (0, microservices_1.MessagePattern)("product.deleted"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "handleDeleteProduct", null);
__decorate([
    (0, microservices_1.MessagePattern)("product.stock-updated"),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "handleStockUpdate", null);
ProductController = __decorate([
    (0, common_1.Controller)("product"),
    (0, swagger_1.ApiTags)("Product"),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        cqrs_1.QueryBus])
], ProductController);
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map