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
exports.BrandsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const brand_schema_1 = require("./brand.schema");
const brand_dto_1 = require("./brand.dto");
let BrandsService = class BrandsService {
    constructor(brandModel) {
        this.brandModel = brandModel;
    }
    async create(createBrandDto) {
        const createdBrand = new this.brandModel(createBrandDto);
        return createdBrand.save();
    }
    async findAll() {
        const brands = await this.brandModel.find().lean().exec();
        return brands.map((b) => new brand_dto_1.default(b.id, b.name, b.products));
    }
    async findById(id) {
        const brand = await this.brandModel.findOne({ id: id }).lean().exec();
        return new brand_dto_1.default(brand.id, brand.name, brand.products);
    }
    async findByName(name) {
        return await this.brandModel.findOne({ name: name }).lean().exec();
    }
    async update(id, updateBrandDto) {
        const updatedBrand = await this.brandModel
            .findOneAndUpdate({ id: id }, updateBrandDto, {
            new: true,
        })
            .lean()
            .exec();
        return updatedBrand;
    }
};
exports.BrandsService = BrandsService;
exports.BrandsService = BrandsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(brand_schema_1.Brand.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], BrandsService);
//# sourceMappingURL=brand.service.js.map