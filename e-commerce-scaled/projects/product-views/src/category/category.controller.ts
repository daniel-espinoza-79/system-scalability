import {
  Controller,
  Get,
  Param
} from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

import { Category } from "./category.schema";
import { CategoriesService } from "./category.service";

@Controller("categories")
@ApiTags("Categories")
class CategoryController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: "Get all categories" })
  @ApiCreatedResponse({ type: Category, isArray: true })
  async findAll(): Promise<Category[]> {
    const categories: Category[] = await this.categoryService.findAll();
    return categories;
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a category by id" })
  @ApiCreatedResponse({ type: Category })
  async findOne(@Param("id") id: string): Promise<Category> {
    const category: Category = await this.categoryService.findById(id);
    return category;
  }
}

export default CategoryController;
