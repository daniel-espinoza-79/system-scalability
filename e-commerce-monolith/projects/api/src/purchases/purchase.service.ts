import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import PrismaService from '@/prisma/prisma.service';

@Injectable()
class PurchasesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.PurchaseCreateInput) {
    return this.prisma.purchase.create({ data });
  }

  async getAll() {
    return this.prisma.purchase.findMany({
      include: { purchasesProducts: true },
    });
  }
}
export default PurchasesService;
