/* eslint-disable simple-import-sort/imports */
import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

import BrandModule from "./brand/brand.module";
import { CategoriesModule } from "./category/category.module";
import ProductModule from "./product/product.module";
import { MongooseModule } from "@nestjs/mongoose";
import { SuppliersModule } from "./suppliers/suppliers.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://root:example@localhost:27017", {
      dbName: "productsdb",
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, "../../../client/dist"),
    }),
    BrandModule,
    CategoriesModule,
    ProductModule,
    SuppliersModule,
  ],
})
class AppModule {}

export default AppModule;
