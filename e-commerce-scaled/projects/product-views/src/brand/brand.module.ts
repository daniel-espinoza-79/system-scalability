import { Module } from "@nestjs/common";

import { MongooseModule } from "@nestjs/mongoose";
import BrandController from "./brand.controller";
import { BrandsService } from "./brand.service";
import { Brand, BrandSchema } from "./brand.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Brand.name, schema: BrandSchema }]),
  ],
  controllers: [BrandController],
  providers: [BrandsService],
  exports: [BrandsService],
})
class BrandModule {}
export default BrandModule;
