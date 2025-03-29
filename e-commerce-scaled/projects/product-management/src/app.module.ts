/* eslint-disable simple-import-sort/imports */
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

import BrandModule from './brand/brand.module';
import CategoryModule from './category/category.module';
import CountryModule from './country/country.module';
import ProductImageModule from './product-image/product-image.module';
import ProductModule from './product/product.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../../client/dist'),
    }),
    CountryModule,
    BrandModule,
    CategoryModule,
    ProductModule,
    ProductImageModule,
  ],
})
class AppModule {}

export default AppModule;
