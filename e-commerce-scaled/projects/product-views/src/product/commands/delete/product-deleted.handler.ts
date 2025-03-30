import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProductDeletedCommand } from "./product-deleted.command";
import { ProductsService } from "../../product.service";
import { BrandsService } from "@/brand/brand.service";
import { QueryProductDto } from "@/product/dtos/query-product.dto";

@CommandHandler(ProductDeletedCommand)
export class ProductDeletedHandler
  implements ICommandHandler<ProductDeletedCommand>
{
  constructor(
    private readonly productService: ProductsService,
    private readonly brandService: BrandsService
  ) {}

  async execute(command: ProductDeletedCommand): Promise<void> {
    const { productId } = command;
    const product = await this.productService.findById(productId);
    await this.productService.delete(productId);

    let brand = await this.brandService.findByName(product.brand);

    if (!brand) {
      throw new Error("Brand not found");
    }

    const index = brand.products.findIndex((p) => p.id === productId);
    if (index !== -1) {
      brand.products.splice(index, 1);
    }
    let queryProductDto = new QueryProductDto();
    queryProductDto.page = 1;
    queryProductDto.limit = 10;
    queryProductDto.brand = product.brand;

    const newBrandProducts = await this.productService.findAll(queryProductDto);

    if (newBrandProducts.length > 0) {
      brand.products = newBrandProducts.map((p) => {
        return {
          id: p.id,
          name: p.name,
          price: p.price,
          category: p.category,
          image: p.productImages[0],
        };
      });
    }

    await this.brandService.update(brand.id, brand);
  }
}
