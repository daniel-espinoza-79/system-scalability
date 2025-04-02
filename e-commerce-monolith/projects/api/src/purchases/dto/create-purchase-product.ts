import { PurchaseStatus } from '@prisma/client';
import { Type } from 'class-transformer';
import { IsDateString, IsEnum, IsNotEmpty, IsNumber, ValidateNested } from 'class-validator';

class CreatePurchaseProductDto {
  productId: string;

  quantity: number;
}

export default CreatePurchaseProductDto;
