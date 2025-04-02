import { ApiProperty } from '@nestjs/swagger';

class PrismaPurchase {
  @ApiProperty({
    type: 'string',
    format: 'uuid',
    description: 'El ID único de la compra',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  readonly id: string;

  @ApiProperty({
    type: 'array',
    description: 'La lista de productos comprados',
    example: [{ id: 'prod-1', amount: 1, price_per_unit: 100, price_per_products: 100 }],
  })
  readonly products: Array<{
    id: string;
    amount: number;
    price_per_unit: number;
    price_per_products: number;
  }>;

  @ApiProperty({
    type: 'number',
    description: 'El subtotal de la compra',
    example: 100,
  })
  readonly subtotal: number;

  @ApiProperty({
    type: 'number',
    description: 'Los impuestos aplicados a la compra',
    example: 16,
  })
  readonly taxes: number;

  @ApiProperty({
    type: 'number',
    description: 'El total de la compra',
    example: 116,
  })
  readonly total: number;

  @ApiProperty({
    type: 'Date',
    description: 'La fecha en que se creó la compra',
    example: '2021-01-01T00:00:00.000Z',
  })
  readonly createdAt: Date;

  @ApiProperty({
    type: 'Date',
    description: 'La fecha en que se actualizó por última vez la compra',
    example: '2021-01-01T00:00:00.000Z',
  })
  readonly updatedAt: Date;
}

export default PrismaPurchase;
