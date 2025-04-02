import { Body, Controller, Get, Post } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import PurchasesService from './purchase.service';

@Controller('purchases')
class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  async create(@Body() data: Prisma.PurchaseCreateInput) {
    return this.purchasesService.create(data);
  }

  @Get()
  async getAll() {
    return this.purchasesService.getAll();
  }
}
export default PurchasesController;
