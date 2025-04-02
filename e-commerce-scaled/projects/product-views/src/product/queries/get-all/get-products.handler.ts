import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { ProductsService } from "@/product/product.service";

import GetProductsQuery from "./get-products.query";
import { Product } from "@/product/schemas/product.schema";
import { SimpleProductDto } from "@/product/dtos/simple-product";

@QueryHandler(GetProductsQuery)
class GetProductsHandler implements IQueryHandler<GetProductsQuery> {
  constructor(private readonly productService: ProductsService) {}

  async execute(query: GetProductsQuery): Promise<SimpleProductDto[]> {
    const products: Product[] = await this.productService.findAll(query.query);

    return products.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        stock: product.stock,
        price: product.price,
        isAvailable: product.isAvailable,
        createdAt: product.createdAt,
        category: product.category,
        brand: product.brand,
        productImages: product.productImages,
        suppliers: product.suppliers,
      };
    });
  }
}

export default GetProductsHandler;
