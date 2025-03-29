import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import Product from '../../entities/product.entity';
import ProductService from '../../product.service';
import DeleteProductCommand from './delete-product.command';

@CommandHandler(DeleteProductCommand)
class DeleteProductHandler implements ICommandHandler<DeleteProductCommand> {
  constructor(private readonly productService: ProductService) {}

  async execute(command: DeleteProductCommand): Promise<Product> {
    return this.productService.remove(command.id);
  }
}

export default DeleteProductHandler;
