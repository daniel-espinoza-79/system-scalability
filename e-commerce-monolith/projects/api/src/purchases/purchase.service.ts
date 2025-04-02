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
      deliveyDay: data.deliveryDay,
      deadline: data.deadline,
      status: PurchaseStatus.PENDING,
    };

    const orderPurchased = await this.prisma.purchase.create({
      data: purchaseData,
    });

    data.purchaseProducts.map(async (p) => {
      this.prisma.purchasesProducts.create({
        data: {
          productId: p.productId,
          quantity: p.quantity,
          purchaseId: orderPurchased.id,
        },
      });
    });

    await this.productService.bulkStockUpdate(data.purchaseProducts.map((p) => new OrderItem(p.productId, p.quantity)));

    return orderPurchased;
  }

  async getAll() {
    return this.prisma.purchase.findMany({
      include: { purchasesProducts: true },
    });
  }
}
export default PurchasesService;
