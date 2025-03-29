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
const country_service_1 = require("./country.service");
const create_country_dto_1 = require("./dto/create-country.dto");
const update_country_dto_1 = require("./dto/update-country.dto");
const country_entity_1 = require("./entities/country.entity");
let CountryController = class CountryController {
    constructor(countriesService) {
        this.countriesService = countriesService;
    }
    async create(createCountryDto) {
        const country = await this.countriesService.create(createCountryDto);
        return country;
    }
    async findAll() {
        const countries = await this.countriesService.findAll();
        return countries;
    }
    async findOne(id) {
        const country = await this.countriesService.findOne(id);
        return country;
    }
    async update(id, updateCountryDto) {
        const country = await this.countriesService.update(id, updateCountryDto);
        return country;
    }
    async remove(id) {
        const country = await this.countriesService.remove(id);
        return country;
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new country' }),
    (0, swagger_1.ApiCreatedResponse)({ type: country_entity_1.default }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_country_dto_1.default]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all countries' }),
    (0, swagger_1.ApiCreatedResponse)({ type: country_entity_1.default, isArray: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a country by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: country_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a country by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: country_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_country_dto_1.default]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a country by id' }),
    (0, swagger_1.ApiCreatedResponse)({ type: country_entity_1.default }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], CountryController.prototype, "remove", null);
CountryController = __decorate([
    (0, common_1.Controller)('countries'),
    (0, swagger_1.ApiTags)('Countries'),
    __metadata("design:paramtypes", [country_service_1.default])
], CountryController);
exports.default = CountryController;
//# sourceMappingURL=country.controller.js.map