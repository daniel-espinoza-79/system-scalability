import {
  Controller,
  Get,
  Param
} from "@nestjs/common";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";

import { CategoriesService } from "./category.service";
import CategoryDto from "./category.dto";

@Controller("categories")
@ApiTags("Categories")
class CategoryController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Get()
  @ApiOperation({ summary: "Get all categories" })
  @ApiCreatedResponse({ type: CategoryDto, isArray: true })
  async findAll(): Promise<CategoryDto[]> {
    const categories: CategoryDto[] = await this.categoryService.findAll();
    return categories;
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a category by id" })
  @ApiCreatedResponse({ type: CategoryDto })
  async findOne(@Param("id") id: string): Promise<CategoryDto> {
    const category: CategoryDto = await this.categoryService.findById(id);
    return category;
  }
}

export default CategoryController;
