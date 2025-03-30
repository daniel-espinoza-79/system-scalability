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
const order_item_dto_1 = require("../../dto/order-item.dto");
const product_service_1 = require("../../product.service");
const product_events_publisher_1 = require("../../product-events.publisher");
const update_stocks_command_1 = require("./update-stocks.command");
let UpdateStocksCommandHandler = class UpdateStocksCommandHandler {
    constructor(productService, publisher) {
        this.productService = productService;
        this.publisher = publisher;
    }
    async execute(command) {
        let updatedProducts = [];
        const products = await this.productService.findManyByIds(command.orderItems.map((item) => item.id));
        for (let i = 0; i < products.length; i += 1) {
            const product = products[i];
            const orderItem = command.orderItems.find((item) => item.id === product.id);
            if (product.stock >= orderItem.stock) {
                updatedProducts.push(new order_item_dto_1.default(product.id, product.stock - orderItem.stock, product.brandId));
            }
            else {
                updatedProducts = [];
                break;
            }
        }
        if (updatedProducts.length > 0) {
            await this.productService.bulkStockUpdate(updatedProducts);
            this.publisher.publishNewStockUpdate(updatedProducts);
        }
    }
};
UpdateStocksCommandHandler = __decorate([
    (0, cqrs_1.CommandHandler)(update_stocks_command_1.default),
    __metadata("design:paramtypes", [product_service_1.default,
        product_events_publisher_1.default])
], UpdateStocksCommandHandler);
exports.default = UpdateStocksCommandHandler;
//# sourceMappingURL=update-stocks.handler.js.map