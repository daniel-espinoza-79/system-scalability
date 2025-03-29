import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import Product from '@/product/entities/product.entity';
import ProductService from '@/product/product.service';

import GetProductsQuery from './get-products.query';

@QueryHandler(GetProductsQuery)
class GetProductsHandler implements IQueryHandler<GetProductsQuery> {
  constructor(private readonly productService: ProductService) {}

  async execute(): Promise<Product[]> {
    return this.productService.findAll();
  }
}

export default GetProductsHandler;
