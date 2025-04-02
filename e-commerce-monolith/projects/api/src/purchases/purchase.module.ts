import { Module } from '@nestjs/common';

import PrismaService from '@/prisma/prisma.service';
import ProductModule from '@/product/product.module';

import PurchasesController from './purchase.controller';
import PurchasesService from './purchase.service';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService, PrismaService],
  imports: [ProductModule],
})
class PurchasesModule {}
export default PurchasesModule;
