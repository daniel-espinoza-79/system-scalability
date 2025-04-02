import { Body, Controller, Get, Post } from '@nestjs/common';

import CreatePurchasesProductsDto from './dto/create-purchases.dto';
import PurchasesService from './purchase.service';

@Controller('purchases')
class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Post()
  async create(@Body() data: CreatePurchasesProductsDto) {
    return this.purchasesService.create(data);
  }

  @Get()
  async getAll() {
    return this.purchasesService.getAll();
  }
}
export default PurchasesController;
