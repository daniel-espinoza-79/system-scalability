import { IQueryHandler } from "@nestjs/cqrs";
import { ProductsService } from "@/product/product.service";
import GetProductsQuery from "./get-products.query";
import { SimpleProductDto } from "@/product/dtos/simple-product";
declare class GetProductsHandler implements IQueryHandler<GetProductsQuery> {
    private readonly productService;
    constructor(productService: ProductsService);
    execute(query: GetProductsQuery): Promise<SimpleProductDto[]>;
}
export default GetProductsHandler;
