import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import Product from '@/product/entities/product.entity';
import ProductService from '@/product/product.service';

import GetProductQuery from './get-product.query';

@QueryHandler(GetProductQuery)
class GetProductHandler implements IQueryHandler<GetProductQuery> {
  constructor(private readonly productService: ProductService) {}

  async execute(query: GetProductQuery): Promise<Product> {
    return this.productService.findOne(query.id);
  }
}

export default GetProductHandler;
