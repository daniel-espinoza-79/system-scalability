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
const create_product_image_dto_1 = require("./dto/create-product-image.dto");
const update_product_image_dto_1 = require("./dto/update-product-image.dto");
const product_image_entity_1 = require("./entities/product-image.entity");
const product_image_service_1 = require("./product-image.service");
let ProductImageController = class ProductImageController {
    constructor(productImageService) {
        this.productImageService = productImageService;
    }
    async create(createProductImageDto) {
        const productImage = await this.productImageService.create(createProductImageDto);
        return productImage;
    }
    async findAll() {
        const productImages = await this.productImageService.findAll();
        return productImages;
    }
    async findOne(id) {
        const productImage = await this.productImageService.findOne(id);
        return productImage;
    }
    async update(id, updateProductImageDto) {
        const productImage = await this.productImageService.update(id, updateProductImageDto);
        return productImage;
    }
    async remove(id) {
        const productImage = await this.productImageService.remove(id);
        return productImage;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new product image' }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_image_entity_1.default }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_image_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductImageController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all product images' }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_image_entity_1.default, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductImageController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a product image by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_image_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductImageController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a product image by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_image_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_image_dto_1.default]),
    __metadata("design:returntype", Promise)
], ProductImageController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a product image by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: product_image_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductImageController.prototype, "remove", null);
ProductImageController = __decorate([
    (0, swagger_1.ApiTags)('Product Image'),
    (0, common_1.Controller)('product-image'),
    __metadata("design:paramtypes", [product_image_service_1.default])
], ProductImageController);
exports.default = ProductImageController;
//# sourceMappingURL=product-image.controller.js.map