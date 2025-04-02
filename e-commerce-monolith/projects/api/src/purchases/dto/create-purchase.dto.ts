import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

class CreatePurchaseDto {
  @ApiProperty({
    type: 'array',
    description: 'Lista de productos comprados',
    example: [{ id: 'prod-1', amount: 1, price_per_unit: 100, price_per_products: 100 }],
  })
  @IsArray()
  @IsNotEmpty()
  readonly products: Array<{
    id: string;
    amount: number;
    price_per_unit: number;
    price_per_products: number;
  }>;

  @ApiProperty({
    type: 'number',
    description: 'Subtotal de la compra',
    example: 100,
  })
  @IsNumber()
  @IsPositive()
  readonly subtotal: number;

  @ApiProperty({
    type: 'number',
    description: 'Impuestos aplicados a la compra',
    example: 16,
  })
  @IsNumber()
  @IsPositive()
  readonly taxes: number;

  @ApiProperty({
    type: 'number',
    description: 'Total de la compra',
    example: 116,
  })
  @IsNumber()
  @IsPositive()
  readonly total: number;
}
export default CreatePurchaseDto;
