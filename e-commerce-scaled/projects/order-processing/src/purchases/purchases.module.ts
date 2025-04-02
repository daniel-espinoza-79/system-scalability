import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchasesController } from './purchases.controller';
import { PurchasesService } from './purchases.service';
import { PurchaseSchema } from './purchase.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Purchase', schema: PurchaseSchema }]),
  ],
  controllers: [PurchasesController],
  providers: [PurchasesService],
})
export class PurchasesModule {}
