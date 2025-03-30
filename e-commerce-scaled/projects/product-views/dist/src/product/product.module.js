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
const product_controller_1 = require("./product.controller");
const product_service_1 = require("./product.service");
const product_created_handler_1 = require("./commands/create/product-created.handler");
const product_updated_handler_1 = require("./commands/update/product-updated.handler");
const product_deleted_handler_1 = require("./commands/delete/product-deleted.handler");
const update_stocks_handler_1 = require("./commands/update-stocks/update-stocks.handler");
const get_products_handler_1 = require("./queries/get-all/get-products.handler");
const get_product_handler_1 = require("./queries/get-by-id/get-product.handler");
const product_schema_1 = require("./schemas/product.schema");
const mongoose_1 = require("@nestjs/mongoose");
const suppliers_module_1 = require("../suppliers/suppliers.module");
const brand_module_1 = require("../brand/brand.module");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            cqrs_1.CqrsModule,
            mongoose_1.MongooseModule.forFeature([{ name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema }]),
            suppliers_module_1.SuppliersModule,
            brand_module_1.default,
        ],
        controllers: [product_controller_1.default],
        providers: [
            product_service_1.ProductsService,
            get_product_handler_1.default,
            get_products_handler_1.default,
            product_created_handler_1.ProductCreatedHandler,
            product_updated_handler_1.ProductUpdatedHandler,
            update_stocks_handler_1.default,
            product_deleted_handler_1.ProductDeletedHandler,
        ],
    })
], ProductModule);
exports.default = ProductModule;
//# sourceMappingURL=product.module.js.map