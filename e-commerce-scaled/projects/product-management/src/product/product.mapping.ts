import { Injectable } from '@nestjs/common';

import SimpleProductDto from './dto/simple-product';
import Product from './entities/product.entity';

@Injectable()
class ProductMapping {
  mapToSimpleProduct(product: Product, category?: string, brand?: string, supplier?: string[]): SimpleProductDto {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      stock: product.stock,
      price: product.price,
      isAvailable: product.isAvailable,
      createdAt: product.createdAt,
      category: category ?? '',
      brand: brand ?? '',
      productImages: product.productImages ? product.productImages.map((image) => image.image) : [],
      suppliers: supplier,
    };
  }
}
export default ProductMapping;
