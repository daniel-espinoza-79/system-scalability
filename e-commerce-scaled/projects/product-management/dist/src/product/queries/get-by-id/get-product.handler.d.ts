import { IQueryHandler } from '@nestjs/cqrs';
import Product from '@/product/entities/product.entity';
import ProductService from '@/product/product.service';
import GetProductQuery from './get-product.query';
declare class GetProductHandler implements IQueryHandler<GetProductQuery> {
    private readonly productService;
    constructor(productService: ProductService);
    execute(query: GetProductQuery): Promise<Product>;
}
export default GetProductHandler;
