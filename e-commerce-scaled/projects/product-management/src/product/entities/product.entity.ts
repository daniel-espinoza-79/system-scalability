import { ApiProperty } from '@nestjs/swagger';

import PrismaBrand from '@/brand/entities/prisma-brand.entity';
import PrismaCategory from '@/category/entities/prisma-category.entity';
import ProductImage from '@/product-image/entities/product-image.entity';
import SuppliersOnly from '@/products-suppliers/entities/suppliers-only.entity';

class Product {
  @ApiProperty({
    type: 'String',
    format: 'uuid',
    description: 'The unique ID of the product',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  readonly id: string;

  @ApiProperty({
    type: 'String',
    description: 'The name of the product',
    example: 'Laptop',
  })
  readonly name: string;

  @ApiProperty({
    type: 'String',
    description: 'The description of the product',
    example: 'A powerful laptop for all your needs',
  })
  readonly description: string;

  @ApiProperty({
    type: 'Integer',
    description: 'The stock quantity of the product',
    example: 190,
  })
  stock: number;

  @ApiProperty({
    type: 'Float',
    description: 'The price of the product',
    example: 999.99,
  })
  readonly price: number;

  @ApiProperty({
    type: 'Boolean',
    description: 'Whether the product is available',
    example: true,
  })
  readonly isAvailable: boolean;

  @ApiProperty({
    type: 'Date',
    description: 'The date the product was created',
    example: '2021-01-01T00:00:00.000Z',
  })
  readonly createdAt: Date;

  @ApiProperty({
    type: 'Date',
    description: 'The date the product was updated',
    example: '2021-01-01T00:00:00.000Z',
  })
  readonly updatedAt: Date;

  @ApiProperty({
    type: 'String',
    format: 'uuid',
    description: 'The ID of the category of the product',
    example: '123e4567-e89b-12d3-a456-426814174002',
  })
  readonly categoryId: string;

  @ApiProperty({
    type: 'String',
    format: 'uuid',
    description: 'The ID of the brand of the product',
    example: '123e4567-e89b-12d3-a456-426814174003',
  })
  readonly brandId: string;

  @ApiProperty({
    type: () => PrismaCategory,
    description: 'The category of the product',
  })
  readonly category: PrismaCategory;

  @ApiProperty({
    type: () => PrismaBrand,
    description: 'The brand of the product',
  })
  readonly brand: PrismaBrand;

  @ApiProperty({
    type: () => ProductImage,
    isArray: true,
    description: 'Images associated with the product',
  })
  readonly productImages: ProductImage[];

  @ApiProperty({
    type: () => SuppliersOnly,
    isArray: true,
    description: 'Suppliers associated with the product',
  })
  readonly productsSuppliers: SuppliersOnly[];
}

export default Product;
