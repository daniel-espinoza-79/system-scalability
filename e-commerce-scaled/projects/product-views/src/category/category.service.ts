import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Category } from "./category.schema";
import CategoryDto from "./category.dto";

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<Category>
  ) {}

  async create(createCategoryDto: any): Promise<CategoryDto> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    let cat = await createdCategory.save();
    return new CategoryDto(cat.id, cat.name, cat.image);
  }

  async findAll(): Promise<CategoryDto[]> {
    const categories: Category[] = await this.categoryModel
      .find()
      .lean()
      .exec();
    return categories.map((c) => new CategoryDto(c.id, c.name, c.image));
  }

  async findById(id: string): Promise<CategoryDto> {
    const category: Category = await this.categoryModel
      .findOne({ id: id })
      .lean()
      .exec();
    return new CategoryDto(category.id, category.name, category.image);
  }
}
