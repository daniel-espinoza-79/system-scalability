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
const microservices_1 = require("@nestjs/microservices");
const swagger_1 = require("@nestjs/swagger");
const create_product_command_1 = require("./commands/create/create-product.command");
const delete_product_command_1 = require("./commands/delete/delete-product.command");
const update_product_command_1 = require("./commands/update/update-product.command");
const update_stocks_command_1 = require("./commands/update-stocks/update-stocks.command");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const product_entity_1 = require("./entities/product.entity");
const product_events_publisher_1 = require("./product-events.publisher");
let ProductController = class ProductController {
    constructor(commandBus, publisher) {
        this.commandBus = commandBus;
        this.publisher = publisher;
    }
    async create(createProductDto) {
        return this.commandBus.execute(new create_product_command_1.default(createProductDto));
    }
    async update(id, updateProductDto) {
        return this.commandBus.execute(new update_product_command_1.default(id, updateProductDto));
    }
    async remove(id) {
        return this.commandBus.execute(new delete_product_command_1.default(id));
    }
    async handleDeleteProduct(orderItems) {
        await this.commandBus.execute(new update_stocks_command_1.default(orderItems));
    }
    async test() {
        this.publisher.publishUpdates([
            {
                id: '45a8a62c-5840-4c61-af84-1857f703f6bf',
                stock: 5,
            },
            {
                id: '4645b434-fcac-4b2d-84a8-3459eb819afe',
                stock: 5,
            },
            {
                id: '6bda5f43-4eac-4c30-9d44-440b3b5919c0',
                stock: 5,
            },
        ]);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Product' }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_entity_1.default }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a product by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a product by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "remove", null);
__decorate([
    (0, microservices_1.MessagePattern)('order.completed'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "handleDeleteProduct", null);
__decorate([
    (0, common_1.Post)('test'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "test", null);
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    (0, swagger_1.ApiTags)('Product'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus,
        product_events_publisher_1.default])
], ProductController);
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map