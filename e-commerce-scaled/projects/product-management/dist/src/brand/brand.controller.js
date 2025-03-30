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
const brand_service_1 = require("./brand.service");
const create_brand_dto_1 = require("./dto/create-brand.dto");
const update_brand_dto_1 = require("./dto/update-brand.dto");
const brand_entity_1 = require("./entities/brand.entity");
let BrandController = class BrandController {
    constructor(brandService) {
        this.brandService = brandService;
    }
    async create(createBrandDto) {
        const brand = await this.brandService.create(createBrandDto);
        return brand;
    }
    async update(id, updateBrandDto) {
        const brand = await this.brandService.update(id, updateBrandDto);
        return brand;
    }
    async remove(id) {
        const brand = await this.brandService.remove(id);
        return brand;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new brand' }),
    (0, swagger_1.ApiCreatedResponse)({ type: brand_entity_1.default }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_brand_dto_1.default]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a brand by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: brand_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_brand_dto_1.default]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a brand by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: brand_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BrandController.prototype, "remove", null);
BrandController = __decorate([
    (0, common_1.Controller)('brands'),
    (0, swagger_1.ApiTags)('Brands'),
    __metadata("design:paramtypes", [brand_service_1.default])
], BrandController);
exports.default = BrandController;
//# sourceMappingURL=brand.controller.js.map