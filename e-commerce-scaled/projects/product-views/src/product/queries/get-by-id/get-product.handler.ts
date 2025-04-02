import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";

import { ProductsService } from "@/product/product.service";

import GetProductQuery from "./get-product.query";
import { SuppliersService } from "@/suppliers/suppliers.service";
import { ProductDto } from "@/product/dtos/product.dto";

@QueryHandler(GetProductQuery)
class GetProductHandler implements IQueryHandler<GetProductQuery> {
  constructor(
    private readonly productService: ProductsService,
    private readonly supplierService: SuppliersService
  ) {}

  async execute(query: GetProductQuery): Promise<ProductDto> {
    let product = await this.productService.findById(query.id);
    const suppliers = await this.supplierService.findByNames(product.suppliers);
    let productDto = new ProductDto();
    productDto.id = product.id;
    productDto.name = product.name;
    productDto.description = product.description;
    productDto.stock = product.stock;
    productDto.price = product.price;
    productDto.isAvailable = product.isAvailable;
    productDto.createdAt = product.createdAt;
    productDto.category = product.category;
    productDto.brand = product.brand;
    productDto.productImages = product.productImages;
    productDto.suppliers = suppliers.map((supplier) => {
      return {
        id: supplier.id,
        name: supplier.name,
        email: supplier.email,
        deliveryTime: supplier.deliveryTime,
        tax: supplier.tax,
      };
    });
    return productDto;
  }
}

export default GetProductHandler;
