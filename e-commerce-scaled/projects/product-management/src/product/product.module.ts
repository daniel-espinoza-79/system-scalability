import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';

import PrismaService from '@/prisma/prisma.service';

import CreateProductHandler from './commands/create/create-product.handler';
import DeleteProductHandler from './commands/delete/delete-product.handler';
import UpdateProductHandler from './commands/update/update-product.handler';
import ProductController from './product.controller';
import ProductService from './product.service';
import GetProductsHandler from './queries/get-all/get-products.handler';
import GetProductHandler from './queries/get-by-id/get-product.handler';

@Module({
  imports: [CqrsModule],
  controllers: [ProductController],
  providers: [
    ProductService,
    PrismaService,
    CreateProductHandler,
    UpdateProductHandler,
    DeleteProductHandler,
    GetProductHandler,
    GetProductsHandler,
  ],
})
export default class ProductModule {}
