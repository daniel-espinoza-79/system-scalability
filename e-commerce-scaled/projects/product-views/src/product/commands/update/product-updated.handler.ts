import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProductUpdatedCommand } from "./product-updated.command";
import { ProductsService } from "../../product.service";
import { BrandsService } from "@/brand/brand.service";

@CommandHandler(ProductUpdatedCommand)
export class ProductUpdatedHandler
  implements ICommandHandler<ProductUpdatedCommand>
{
  constructor(
    private readonly productService: ProductsService,
    private readonly brandService: BrandsService
  ) {}

  async execute(command: ProductUpdatedCommand): Promise<void> {
    const { product } = command;
    await this.productService.update(product.id, product);

    let brand = await this.brandService.findByName(product.brand);

    if (!brand) {
      throw new Error("Brand not found");
    }

    const index = brand.products.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      brand.products[index] = {
        id: product.id,
        name: product.name,
        price: product.price,
        category: product.category,
        image: product.productImages[0],
      };
      await this.brandService.update(brand.id, brand);
    }
  }
}
