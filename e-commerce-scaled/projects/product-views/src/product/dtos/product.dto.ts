import {
  IsArray,
  IsBoolean,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
} from "class-validator";
import { SupplierDto } from "./supplier.dto";

export class ProductDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsInt()
  stock: number;

  @IsInt()
  price: number;

  @IsBoolean()
  isAvailable: boolean;

  @IsDate()
  createdAt: Date;

  @IsString()
  category: string;

  @IsOptional()
  @IsString()
  brand?: string;

  @IsArray()
  @IsString({ each: true })
  productImages: string[];

  @IsArray()
  suppliers: SupplierDto[];
}
