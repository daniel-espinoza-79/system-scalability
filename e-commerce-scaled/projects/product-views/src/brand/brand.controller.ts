import { Controller, Get, Param } from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

import { BrandsService } from "./brand.service";
import BrandDto from "./brand.dto";

@Controller("brands")
@ApiTags("Brands")
class BrandController {
  constructor(private readonly brandService: BrandsService) {}

  @Get()
  @ApiOperation({ summary: "Get all brands" })
  @ApiCreatedResponse({ type: BrandDto, isArray: true })
  async findAll(): Promise<BrandDto[]> {
    const brands: BrandDto[] = await this.brandService.findAll();
    return brands;
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a brand by id" })
  @ApiCreatedResponse({ type: BrandDto })
  async findOne(@Param("id") id: string): Promise<BrandDto> {
    const brand: BrandDto = await this.brandService.findById(id);
    return brand;
  }
}

export default BrandController;
