import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Supplier } from "./supplier.schema";

@Injectable()
export class SuppliersService {
  constructor(
    @InjectModel(Supplier.name) private supplierModel: Model<Supplier>
  ) {}

  async create(createSupplierDto: any): Promise<Supplier> {
    const createdSupplier = new this.supplierModel(createSupplierDto);
    return await createdSupplier.save();
  }

  async findAll(): Promise<Supplier[]> {
    return await this.supplierModel.find().lean().exec();
  }

  async findById(id: string): Promise<Supplier> {
    return await this.supplierModel.findOne({ id: id }).lean().exec();
  }

  async findByIds(ids: string[]): Promise<Supplier[]> {
    return await this.supplierModel
      .find({ id: { $in: ids } })
      .lean()
      .exec();
  }

  async findByNames(names: string[]): Promise<Supplier[]> {
    return await this.supplierModel
      .find({ name: { $in: names } })
      .lean()
      .exec();
  }

  async update(id: string, updateSupplierDto: any): Promise<Supplier> {
    const updatedSupplier = await this.supplierModel
      .findByIdAndUpdate(id, updateSupplierDto, { new: true })
      .exec();
    return updatedSupplier;
  }

  async remove(id: string): Promise<Supplier> {
    return await this.supplierModel.findByIdAndDelete(id).exec();
  }
}
