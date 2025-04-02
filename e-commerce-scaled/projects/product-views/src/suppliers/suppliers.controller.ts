import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "@nestjs/common";
import { SuppliersService } from "./suppliers.service";
import { Supplier } from "./supplier.schema";

@Controller("suppliers")
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  async create(@Body() createSupplierDto: any): Promise<Supplier> {
    return this.suppliersService.create(createSupplierDto);
  }

  @Get()
  async findAll(): Promise<Supplier[]> {
    return this.suppliersService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: string): Promise<Supplier> {
    return this.suppliersService.findById(id);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() updateSupplierDto: any
  ): Promise<Supplier> {
    return this.suppliersService.update(id, updateSupplierDto);
  }

  @Delete(":id")
  async remove(@Param("id") id: string): Promise<Supplier> {
    return this.suppliersService.remove(id);
  }
}
