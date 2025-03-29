import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import Product from '@/product/entities/product.entity';
import ProductService from '@/product/product.service';

import UpdateProductCommand from './update-product.command';

@CommandHandler(UpdateProductCommand)
class UpdateProductHandler implements ICommandHandler<UpdateProductCommand> {
  constructor(private readonly productService: ProductService) {}

  async execute(command: UpdateProductCommand): Promise<Product> {
    return this.productService.update(command.id, command.updateProductDto);
  }
}

export default UpdateProductHandler;
