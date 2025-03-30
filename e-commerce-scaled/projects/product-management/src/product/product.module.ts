import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import BrandModule from '@/brand/brand.module';
import CategoryModule from '@/category/category.module';
import PrismaService from '@/prisma/prisma.service';

import CreateProductHandler from './commands/create/create-product.handler';
import DeleteProductHandler from './commands/delete/delete-product.handler';
import UpdateProductHandler from './commands/update/update-product.handler';
import UpdateStocksCommandHandler from './commands/update-stocks/update-stocks.handler';
import ProductController from './product.controller';
import ProductMapping from './product.mapping';
import ProductService from './product.service';
import ProductPublisherService from './product-events.publisher';

@Module({
  imports: [CqrsModule, CategoryModule, BrandModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    CreateProductHandler,
    UpdateProductHandler,
    DeleteProductHandler,
    UpdateStocksCommandHandler,
    ProductPublisherService,
    ProductMapping,
  ],
})
export default class ProductModule {}
