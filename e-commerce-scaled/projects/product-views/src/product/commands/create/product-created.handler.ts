import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { ProductCreatedCommand } from "./product-created.command";
import { ProductsService } from "../../product.service";
import { BrandsService } from "@/brand/brand.service";

@CommandHandler(ProductCreatedCommand)
export class ProductCreatedHandler
  implements ICommandHandler<ProductCreatedCommand>
{
  constructor(
    private readonly productService: ProductsService,
    private readonly brandService: BrandsService
  ) {}

  async execute(command: ProductCreatedCommand): Promise<void> {
    const { product } = command;
    await this.productService.create(product);
    let brand = await this.brandService.findByName(product.brand);

    if (!brand) {
      throw new Error("Brand not found");
    }

    brand.products.unshift({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      image: product.productImages[0],
    });

    if (brand.products.length > 10) {
      brand.products.pop();
    }

    await this.brandService.update(brand.id, brand);
  }
}
