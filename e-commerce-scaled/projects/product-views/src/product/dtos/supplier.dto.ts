import { IsEmail, IsInt, IsString } from "class-validator";

export class SupplierDto {
  @IsString()
  id: string;

  @IsEmail()
  email: string;

  @IsInt()
  deliveryTime: number;

  @IsString()
  name: string;

  @IsInt()
  tax: number;
}
