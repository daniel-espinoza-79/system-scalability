import { IQueryHandler } from '@nestjs/cqrs';
import Product from '@/product/entities/product.entity';
import ProductService from '@/product/product.service';
import GetProductsQuery from './get-products.query';
declare class GetProductsHandler implements IQueryHandler<GetProductsQuery> {
    private readonly productService;
    constructor(productService: ProductService);
    execute(): Promise<Product[]>;
}
export default GetProductsHandler;
