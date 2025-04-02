import { Module } from '@nestjs/common';

import PrismaService from '@/prisma/prisma.service';

import PurchasesController from './purchase.controller';
import PurchasesService from './purchase.service';

@Module({
  controllers: [PurchasesController],
  providers: [PurchasesService, PrismaService],
})
class PurchasesModule {}
export default PurchasesModule;
