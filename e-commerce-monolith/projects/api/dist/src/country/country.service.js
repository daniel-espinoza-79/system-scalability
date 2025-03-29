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
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let CountryService = class CountryService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createCountryDto) {
        try {
            const country = await this.prisma.country.create({
                data: {
                    ...createCountryDto,
                },
            });
            return country;
        }
        catch (error) {
            if (error?.meta?.target?.includes('name')) {
                throw new common_1.BadRequestException('Country name already exists');
            }
            throw new common_1.BadRequestException('Something went wrong');
        }
    }
    async findAll() {
        const countries = await this.prisma.country.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
        return countries;
    }
    async findOne(id) {
        const country = await this.prisma.country.findUnique({
            where: {
                id,
            },
        });
        if (!country) {
            throw new common_1.NotFoundException(`Country with ID ${id} not found`);
        }
        return country;
    }
    async update(id, updateCountryDto) {
        try {
            const country = await this.prisma.country.update({
                where: {
                    id,
                },
                data: updateCountryDto,
            });
            return country;
        }
        catch (error) {
            if (error?.meta?.target?.includes('name')) {
                throw new common_1.BadRequestException('Country name already exists');
            }
            throw new common_1.NotFoundException(`Country with ID ${id} not found`);
        }
    }
    async remove(id) {
        try {
            const country = await this.prisma.country.delete({
                where: {
                    id,
                },
            });
            return country;
        }
        catch (error) {
            throw new common_1.NotFoundException(`Country with ID ${id} not found`);
        }
    }
};
CountryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.default])
], CountryService);
exports.default = CountryService;
//# sourceMappingURL=country.service.js.map