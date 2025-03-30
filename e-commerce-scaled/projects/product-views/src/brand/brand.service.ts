import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Brand } from "./brand.schema";
import BrandDto from "./brand.dto";

@Injectable()
export class BrandsService {
  constructor(@InjectModel(Brand.name) private brandModel: Model<Brand>) {}

  async create(createBrandDto: any): Promise<Brand> {
    const createdBrand = new this.brandModel(createBrandDto);
    return createdBrand.save();
  }

  async findAll(): Promise<BrandDto[]> {
    const brands =  await this.brandModel.find().lean().exec();
    return brands.map((b) => new BrandDto(b.id, b.name, b.products));
  }

  async findById(id: string): Promise<BrandDto> {
    const brand = await this.brandModel.findOne({ id: id }).lean().exec();
    return new BrandDto(brand.id, brand.name, brand.products);
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
