import { IsOptional, IsString } from "class-validator";

class CategoryDto {
  @IsString()
  readonly id: string;

  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly image?: string;

  constructor(id: string, name: string, image?: string) {
    this.id = id;
    this.name = name;
    this.image = image;
  }
}

export default CategoryDto;
