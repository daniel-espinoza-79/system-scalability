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
const brand_module_1 = require("./brand/brand.module");
const category_module_1 = require("./category/category.module");
const country_module_1 = require("./country/country.module");
const product_image_module_1 = require("./product-image/product-image.module");
const product_module_1 = require("./product/product.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '../../../client/dist'),
            }),
            country_module_1.default,
            brand_module_1.default,
            category_module_1.default,
            product_module_1.default,
            product_image_module_1.default,
        ],
    })
], AppModule);
exports.default = AppModule;
//# sourceMappingURL=app.module.js.map