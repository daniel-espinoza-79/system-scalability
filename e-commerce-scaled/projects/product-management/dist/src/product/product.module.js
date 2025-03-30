"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const cqrs_1 = require("@nestjs/cqrs");
const brand_module_1 = require("../brand/brand.module");
const category_module_1 = require("../category/category.module");
const prisma_service_1 = require("../prisma/prisma.service");
const create_product_handler_1 = require("./commands/create/create-product.handler");
const delete_product_handler_1 = require("./commands/delete/delete-product.handler");
const update_product_handler_1 = require("./commands/update/update-product.handler");
const update_stocks_handler_1 = require("./commands/update-stocks/update-stocks.handler");
const product_controller_1 = require("./product.controller");
const product_mapping_1 = require("./product.mapping");
const product_service_1 = require("./product.service");
const product_events_publisher_1 = require("./product-events.publisher");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [cqrs_1.CqrsModule, category_module_1.default, brand_module_1.default],
        controllers: [product_controller_1.default],
        providers: [
            product_service_1.default,
            prisma_service_1.default,
            create_product_handler_1.default,
            update_product_handler_1.default,
            delete_product_handler_1.default,
            update_stocks_handler_1.default,
            product_events_publisher_1.default,
            product_mapping_1.default,
        ],
    })
], ProductModule);
exports.default = ProductModule;
//# sourceMappingURL=product.module.js.map