import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { PurchasesService } from './purchases.service';
import { CreatePurchaseDto } from './create-purchase.dto';
import { Purchase } from './purchase.schema';

@Controller('purchases')
export class PurchasesController {
  constructor(private readonly purchasesService: PurchasesService) {}

  @Get()
  async getAll(): Promise<Purchase[]> {
    return this.purchasesService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Purchase> {
    return this.purchasesService.getById(id);
  }

  @Post()
  async create(
    @Body() createPurchaseDto: CreatePurchaseDto,
  ): Promise<Purchase> {
    return this.purchasesService.create(createPurchaseDto);
  }
}
