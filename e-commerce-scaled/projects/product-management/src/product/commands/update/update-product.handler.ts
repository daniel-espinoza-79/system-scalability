import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import Product from '@/product/entities/product.entity';
import ProductMapping from '@/product/product.mapping';
import ProductService from '@/product/product.service';
import ProductPublisherService from '@/product/product-events.publisher';

import UpdateProductCommand from './update-product.command';

@CommandHandler(UpdateProductCommand)
class UpdateProductHandler implements ICommandHandler<UpdateProductCommand> {
  constructor(
    private readonly productService: ProductService,
    private readonly mapping: ProductMapping,
    private readonly publisher: ProductPublisherService
  ) {}

  async execute(command: UpdateProductCommand): Promise<Product> {
    await this.productService.update(command.id, command.updateProductDto);
    const product = await this.productService.findOne(command.id);
    this.publisher.publishProductUpdated(
      this.mapping.mapToSimpleProduct(product, product.category.name, product.brand.name)
    );
    return product;
  }
}

export default UpdateProductHandler;
