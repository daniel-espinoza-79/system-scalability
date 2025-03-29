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
const create_supplier_dto_1 = require("./dto/create-supplier.dto");
const update_supplier_dto_1 = require("./dto/update-supplier.dto");
const supplier_entity_1 = require("./entities/supplier.entity");
const supplier_service_1 = require("./supplier.service");
let SupplierController = class SupplierController {
    constructor(suppliersService) {
        this.suppliersService = suppliersService;
    }
    async create(createSupplierDto) {
        const supplier = await this.suppliersService.create(createSupplierDto);
        return supplier;
    }
    async findAll() {
        const suppliers = await this.suppliersService.findAll();
        return suppliers;
    }
    async findOne(id) {
        const supplier = await this.suppliersService.findOne(id);
        return supplier;
    }
    async update(id, updateSupplierDto) {
        const supplier = await this.suppliersService.update(id, updateSupplierDto);
        return supplier;
    }
    async remove(id) {
        const supplier = await this.suppliersService.remove(id);
        return supplier;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new supplier' }),
    (0, swagger_1.ApiCreatedResponse)({ type: supplier_entity_1.default }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_supplier_dto_1.default]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all suppliers' }),
    (0, swagger_1.ApiCreatedResponse)({ type: supplier_entity_1.default, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a supplier by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: supplier_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a supplier by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: supplier_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_supplier_dto_1.default]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a supplier by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: supplier_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SupplierController.prototype, "remove", null);
SupplierController = __decorate([
    (0, common_1.Controller)('suppliers'),
    (0, swagger_1.ApiTags)('Suppliers'),
    __metadata("design:paramtypes", [supplier_service_1.default])
], SupplierController);
exports.default = SupplierController;
//# sourceMappingURL=supplier.controller.js.map