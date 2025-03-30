import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CategoriesService } from "./category.service";
import CategoryController  from "./category.controller";
import { Category, CategorySchema } from "./category.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
  ],
  controllers: [CategoryController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
