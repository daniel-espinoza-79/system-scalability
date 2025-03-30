import {
  Controller,
  Get,
  Param,
} from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

import { BrandsService } from "./brand.service";
import { Brand } from "./brand.schema";

@Controller("brands")
@ApiTags("Brands")
class BrandController {
  constructor(private readonly brandService: BrandsService) {}

  @Get()
  @ApiOperation({ summary: "Get all brands" })
  @ApiCreatedResponse({ type: Brand, isArray: true })
  async findAll(): Promise<Brand[]> {
    const brands: Brand[] = await this.brandService.findAll();
    return brands;
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a brand by id" })
  @ApiCreatedResponse({ type: Brand })
  async findOne(@Param("id") id: string): Promise<Brand> {
    const brand: Brand = await this.brandService.findById(id);
    return brand;
  }
}

export default BrandController;
