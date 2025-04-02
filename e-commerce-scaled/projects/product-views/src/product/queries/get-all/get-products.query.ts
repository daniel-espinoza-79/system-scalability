import { QueryProductDto } from "@/product/dtos/query-product.dto";
import { IQuery } from "@nestjs/cqrs";

class GetProductsQuery implements IQuery {
  query: QueryProductDto;

  constructor(query: QueryProductDto) {
    this.query = query;
  }
}

export default GetProductsQuery;
