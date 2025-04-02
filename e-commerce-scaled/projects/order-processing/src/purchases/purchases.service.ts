import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Purchase } from './purchase.schema';
import { CreatePurchaseDto } from './create-purchase.dto';

@Injectable()
export class PurchasesService {
  constructor(
    @InjectModel('Purchase') private readonly purchaseModel: Model<Purchase>,
  ) {}

  async getAll(): Promise<Purchase[]> {
    return this.purchaseModel.find().exec();
  }

  async getById(id: string): Promise<Purchase> {
    const purchase = await this.purchaseModel.findById(id).exec();
    if (!purchase) {
      throw new NotFoundException('Purchase not found');
    }
    return purchase;
  }

  async create(purchaseData: CreatePurchaseDto): Promise<Purchase> {
    const newPurchase = new this.purchaseModel(purchaseData);
    return newPurchase.save();
  }
}
