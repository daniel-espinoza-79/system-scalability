import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Brand } from "./brand.schema";

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async create(createBrandDto: any): Promise<Brand> {
    const createdBrand = new this.brandModel(createBrandDto);
    return createdBrand.save();
  }

  async findAll(): Promise<Brand[]> {
    return await this.brandModel.find().lean().exec();
  }

  async findById(id: string): Promise<Brand> {
    return await this.brandModel.findOne({ id: id }).lean().exec();
  }

  async findByName(name: string): Promise<Brand> {
    return await this.brandModel.findOne({ name: name }).lean().exec();
  }

  async update(id: string, updateBrandDto: any): Promise<Brand> {
    const updatedBrand = await this.brandModel
      .findOneAndUpdate({ id: id }, updateBrandDto, {
        new: true,
      })
      .lean()
      .exec();
    return updatedBrand;
  }
}
