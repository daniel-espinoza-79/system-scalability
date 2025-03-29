import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import Product from '../../entities/product.entity';
import ProductService from '../../product.service';
import CreateProductCommand from './create-product.command';

@CommandHandler(CreateProductCommand)
class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(private readonly productService: ProductService) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    return this.productService.create(command.createProductDto);
  }
}

export default CreateProductHandler;
