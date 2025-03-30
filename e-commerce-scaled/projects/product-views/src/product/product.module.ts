import { Module } from "@nestjs/common";
import { CqrsModule } from "@nestjs/cqrs";

import ProductController from "./product.controller";
import { ProductsService } from "./product.service";

import { ProductCreatedHandler } from "./commands/create/product-created.handler";
import { ProductUpdatedHandler } from "./commands/update/product-updated.handler";
import { ProductDeletedHandler } from "./commands/delete/product-deleted.handler";

import GetProductsHandler from "./queries/get-all/get-products.handler";
import GetProductHandler from "./queries/get-by-id/get-product.handler";

import { Product, ProductSchema } from "./schemas/product.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { SuppliersModule } from "@/suppliers/suppliers.module";
import BrandModule from "@/brand/brand.module";
@Module({
  imports: [
    CqrsModule,
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    SuppliersModule,
    BrandModule,
  ],
  controllers: [ProductController],
  providers: [
    ProductsService,
    GetProductHandler,
    GetProductsHandler,
    ProductCreatedHandler,
    ProductUpdatedHandler,
    ProductDeletedHandler,
  ],
})
export default class ProductModule {}
