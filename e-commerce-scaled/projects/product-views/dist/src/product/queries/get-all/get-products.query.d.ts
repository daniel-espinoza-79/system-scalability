import { QueryProductDto } from "@/product/dtos/query-product.dto";
import { IQuery } from "@nestjs/cqrs";
declare class GetProductsQuery implements IQuery {
    query: QueryProductDto;
    constructor(query: QueryProductDto);
}
export default GetProductsQuery;
