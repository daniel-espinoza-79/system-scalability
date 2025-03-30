import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Product } from "./schemas/product.schema";
import { QueryProductDto } from "./dtos/query-product.dto";
import OrderItem from "./dtos/order-item.dto";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>
  ) {}

  async create(createProductDto: any): Promise<Product> {
    const createdProduct = new this.productModel(createProductDto);
    return await createdProduct.save();
  }

  async findAll(query: QueryProductDto): Promise<Product[]> {
    const { page = 1, limit = 20, brand, category, search } = query;

    const filter: any = {};
    if (brand) filter.brand = brand;
    if (category) filter.category = category;
    if (search) filter.name = { $regex: search, $options: "i" };

    return await this.productModel
      .find(filter)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean()
      .exec();
  }

  async findById(id: string): Promise<Product> {
    return await this.productModel.findOne({ id: id }).exec();
  }

  async delete(id: string): Promise<Product> {
    return await this.productModel.findOneAndDelete({ id: id }).exec();
  }

  async update(id: string, updateProductDto: any): Promise<Product> {
    return await this.productModel
      .findOneAndUpdate({ id: id }, updateProductDto, {
        new: true,
      })
      .exec();
  }

  async bulkUpdateStock(products: OrderItem[]): Promise<any> {
    const bulkOps = products.map((product) => ({
      updateOne: {
        filter: { id: product.id },
        update: { $set: { stock: product.stock } },
      },
    }));
    return await this.productModel.bulkWrite(bulkOps);
  }
}
