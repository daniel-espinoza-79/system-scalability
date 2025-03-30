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
const create_product_command_1 = require("./commands/create/create-product.command");
const delete_product_command_1 = require("./commands/delete/delete-product.command");
const update_product_command_1 = require("./commands/update/update-product.command");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const product_entity_1 = require("./entities/product.entity");
let ProductController = class ProductController {
    constructor(commandBus) {
        this.commandBus = commandBus;
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
ProductController = __decorate([
    (0, common_1.Controller)('product'),
    (0, swagger_1.ApiTags)('Product'),
    __metadata("design:paramtypes", [cqrs_1.CommandBus])
], ProductController);
exports.default = ProductController;
//# sourceMappingURL=product.controller.js.map