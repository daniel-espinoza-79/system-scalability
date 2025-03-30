import {
  IsString,
  IsNotEmpty,
  IsNumber,
  IsBoolean,
  IsDate,
  IsArray,
  IsOptional,
} from "class-validator";

export class SimpleProductDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsNumber()
  @IsNotEmpty()
  stock: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsBoolean()
  @IsNotEmpty()
  isAvailable: boolean;

  @IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @IsString()
  @IsNotEmpty()
  category: string;

  @IsString()
  @IsOptional()
  brand?: string;

  @IsArray()
  @IsOptional()
  productImages?: string[];

  @IsArray()
  @IsOptional()
  suppliers?: string[];
}
