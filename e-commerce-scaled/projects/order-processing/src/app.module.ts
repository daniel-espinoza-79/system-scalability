import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PurchasesModule } from './purchases/purchases.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:example@localhost:27017', {
      dbName: 'productsdb',
    }),
    PurchasesModule,
  ],
})
export class AppModule {}
