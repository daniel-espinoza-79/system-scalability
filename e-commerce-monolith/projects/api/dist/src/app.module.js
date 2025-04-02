"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const auth_module_1 = require("./auth/auth.module");
const brand_module_1 = require("./brand/brand.module");
const category_module_1 = require("./category/category.module");
const country_module_1 = require("./country/country.module");
const product_image_module_1 = require("./product-image/product-image.module");
const product_module_1 = require("./product/product.module");
const products_suppliers_module_1 = require("./products-suppliers/products-suppliers.module");
const supplier_module_1 = require("./supplier/supplier.module");
const user_module_1 = require("./user/user.module");
const purchase_module_1 = require("./purchases/purchase.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../../../client/dist'),
            }),
            auth_module_1.default,
            user_module_1.default,
            country_module_1.default,
            supplier_module_1.default,
            brand_module_1.default,
            category_module_1.default,
            product_module_1.default,
            product_image_module_1.default,
            products_suppliers_module_1.default,
            purchase_module_1.default,
        ],
    })
], AppModule);
exports.default = AppModule;
//# sourceMappingURL=app.module.js.map