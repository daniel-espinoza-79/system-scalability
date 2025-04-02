import { IsArray, IsOptional, IsString } from "class-validator";

class BrandDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  @IsArray()
  readonly products?: any[];

  constructor(id: string, name: string, products?: any[]) {
    this.id = id;
    this.name = name;
    this.products = products || [];
  }
}

export default BrandDto;
