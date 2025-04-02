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
const swagger_1 = require("@nestjs/swagger");
const admin_decorator_1 = require("../auth/decorators/admin.decorator");
const admin_guard_1 = require("../auth/guard/admin.guard");
const jwt_guard_1 = require("../auth/guard/jwt.guard");
const create_products_suppliers_dto_1 = require("./dto/create-products-suppliers.dto");
const update_products_suppliers_dto_1 = require("./dto/update-products-suppliers.dto");
const products_suppliers_entity_1 = require("./entities/products-suppliers.entity");
const products_suppliers_service_1 = require("./products-suppliers.service");
let ProductsSuppliersController = class ProductsSuppliersController {
    constructor(productsSuppliersService) {
        this.productsSuppliersService = productsSuppliersService;
    }
    async create(createProductsSupplierDto) {
        const productsSuppliers = await this.productsSuppliersService.create(createProductsSupplierDto);
        return productsSuppliers;
    }
    async findAll() {
        const productsSuppliers = await this.productsSuppliersService.findAll();
        return productsSuppliers;
    }
    async findOne(productId, supplierId) {
        const productsSuppliers = await this.productsSuppliersService.findOne(productId, supplierId);
        return productsSuppliers;
    }
    async update(productId, supplierId, updateProductsSupplierDto) {
        const productsSuppliers = await this.productsSuppliersService.update(productId, supplierId, updateProductsSupplierDto);
        return productsSuppliers;
    }
    async remove(productId, supplierId) {
        const productsSuppliers = await this.productsSuppliersService.remove(productId, supplierId);
        return productsSuppliers;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, admin_decorator_1.default)(),
    (0, common_1.UseGuards)(jwt_guard_1.default, admin_guard_1.default),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new products supplier' }),
    (0, swagger_1.ApiCreatedResponse)({ type: products_suppliers_entity_1.default }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_products_suppliers_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductsSuppliersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all products suppliers' }),
    (0, swagger_1.ApiCreatedResponse)({ type: products_suppliers_entity_1.default, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductsSuppliersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':productId/:supplierId'),
    (0, common_1.UseGuards)(jwt_guard_1.default),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get a products supplier by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: products_suppliers_entity_1.default }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Param)('supplierId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductsSuppliersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':productId/:supplierId'),
    (0, admin_decorator_1.default)(),
    (0, common_1.UseGuards)(jwt_guard_1.default, admin_guard_1.default),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Update a products supplier by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: products_suppliers_entity_1.default }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Param)('supplierId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_products_suppliers_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductsSuppliersController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':productId/:supplierId'),
    (0, admin_decorator_1.default)(),
    (0, common_1.UseGuards)(jwt_guard_1.default, admin_guard_1.default),
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a products supplier by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: products_suppliers_entity_1.default }),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Param)('supplierId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductsSuppliersController.prototype, "remove", null);
ProductsSuppliersController = __decorate([
    (0, swagger_1.ApiTags)('Products Suppliers'),
    (0, common_1.Controller)('products-suppliers'),
    __metadata("design:paramtypes", [products_suppliers_service_1.default])
], ProductsSuppliersController);
exports.default = ProductsSuppliersController;
//# sourceMappingURL=products-suppliers.controller.js.map