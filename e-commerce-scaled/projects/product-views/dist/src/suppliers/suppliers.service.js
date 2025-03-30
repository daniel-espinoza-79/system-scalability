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
exports.SuppliersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const supplier_schema_1 = require("./supplier.schema");
let SuppliersService = class SuppliersService {
    constructor(supplierModel) {
        this.supplierModel = supplierModel;
    }
    async create(createSupplierDto) {
        const createdSupplier = new this.supplierModel(createSupplierDto);
        return await createdSupplier.save();
    }
    async findAll() {
        return await this.supplierModel.find().lean().exec();
    }
    async findById(id) {
        return await this.supplierModel.findOne({ id: id }).lean().exec();
    }
    async findByIds(ids) {
        return await this.supplierModel
            .find({ id: { $in: ids } })
            .lean()
            .exec();
    }
    async findByNames(names) {
        return await this.supplierModel
            .find({ name: { $in: names } })
            .lean()
            .exec();
    }
    async update(id, updateSupplierDto) {
        const updatedSupplier = await this.supplierModel
            .findByIdAndUpdate(id, updateSupplierDto, { new: true })
            .exec();
        return updatedSupplier;
    }
    async remove(id) {
        return await this.supplierModel.findByIdAndDelete(id).exec();
    }
};
exports.SuppliersService = SuppliersService;
exports.SuppliersService = SuppliersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(supplier_schema_1.Supplier.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SuppliersService);
//# sourceMappingURL=suppliers.service.js.map