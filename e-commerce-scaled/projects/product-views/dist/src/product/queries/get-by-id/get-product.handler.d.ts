import { IQueryHandler } from "@nestjs/cqrs";
import { ProductsService } from "@/product/product.service";
import GetProductQuery from "./get-product.query";
import { SuppliersService } from "@/suppliers/suppliers.service";
import { ProductDto } from "@/product/dtos/product.dto";
declare class GetProductHandler implements IQueryHandler<GetProductQuery> {
    private readonly productService;
    private readonly supplierService;
    constructor(productService: ProductsService, supplierService: SuppliersService);
    execute(query: GetProductQuery): Promise<ProductDto>;
}
export default GetProductHandler;
