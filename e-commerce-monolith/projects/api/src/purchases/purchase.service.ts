import { Injectable } from '@nestjs/common';
import { PurchaseStatus } from '@prisma/client';

import PrismaService from '@/prisma/prisma.service';
import ProductService from '@/product/product.service';

import CreatePurchasesProductsDto from './dto/create-purchases.dto';
import OrderItem from './dto/order-item.dto';

@Injectable()
class PurchasesService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly productService: ProductService
  ) {}

  async create(data: CreatePurchasesProductsDto) {
    const purchaseData = {
      totalCost: data.totalCost,
      deliveyDay: new Date().toISOString(),
      deadline: new Date().toISOString(),
      status: PurchaseStatus.PENDING,
    };

    const orderPurchased = await this.prisma.purchase.create({
      data: purchaseData,
    });
    if (Array.isArray(data.purchaseProducts)) {
      data.purchaseProducts.forEach(async (p) => {
        await this.prisma.purchasesProducts.create({
          data: {
            productId: p.productId,
            quantity: p.quantity,
            purchaseId: orderPurchased.id,
          },
        });
      });

      await this.productService.bulkStockUpdate(
        data.purchaseProducts.map((p) => new OrderItem(p.productId, p.quantity))
      );
    } else {
      console.error('purchaseProducts is undefined or not an array');
    }
    return orderPurchased;
  }

  async getAll() {
    return this.prisma.purchase.findMany({
      include: { purchasesProducts: true },
    });
  }
}
export default PurchasesService;
