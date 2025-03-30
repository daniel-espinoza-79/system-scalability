import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import ProductPublisherService from '@/product/product-events.publisher';

import Product from '../../entities/product.entity';
import ProductService from '../../product.service';
import DeleteProductCommand from './delete-product.command';

@CommandHandler(DeleteProductCommand)
class DeleteProductHandler implements ICommandHandler<DeleteProductCommand> {
  constructor(
    private readonly productService: ProductService,
    private readonly publisher: ProductPublisherService
  ) {}

  async execute(command: DeleteProductCommand): Promise<Product> {
    this.publisher.publishProductDeleted(command.id);
    return this.productService.remove(command.id);
  }
}

export default DeleteProductHandler;
