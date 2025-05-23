"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const products_suppliers_controller_1 = require("./products-suppliers.controller");
const products_suppliers_service_1 = require("./products-suppliers.service");
let ProductsSuppliersModule = class ProductsSuppliersModule {
};
ProductsSuppliersModule = __decorate([
    (0, common_1.Module)({
        controllers: [products_suppliers_controller_1.default],
        providers: [products_suppliers_service_1.default, prisma_service_1.default],
    })
], ProductsSuppliersModule);
exports.default = ProductsSuppliersModule;
//# sourceMappingURL=products-suppliers.module.js.map