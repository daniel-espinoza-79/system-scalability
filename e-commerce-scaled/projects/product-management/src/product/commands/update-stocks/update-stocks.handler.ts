import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import OrderItem from '@/product/dto/order-item.dto';
import ProductService from '@/product/product.service';
import ProductPublisherService from '@/product/product-events.publisher';

import UpdateStocksCommand from './update-stocks.command';

@CommandHandler(UpdateStocksCommand)
class UpdateStocksCommandHandler implements ICommandHandler<UpdateStocksCommand> {
  constructor(
    private readonly productService: ProductService,
    private readonly publisher: ProductPublisherService
  ) {}

  async execute(command: UpdateStocksCommand): Promise<void> {
    let updatedProducts = [];

    const products = await this.productService.findManyByIds(command.orderItems.map((item) => item.id));

    for (let i = 0; i < products.length; i += 1) {
      const product = products[i];
      const orderItem = command.orderItems.find((item) => item.id === product.id);
      if (product.stock >= orderItem.stock) {
        updatedProducts.push(new OrderItem(product.id, product.stock - orderItem.stock, product.brandId));
      } else {
        updatedProducts = [];
        break;
      }
    }
    if (updatedProducts.length > 0) {
      await this.productService.bulkStockUpdate(updatedProducts);
      this.publisher.publishNewStockUpdate(updatedProducts);
    }
  }
}

export default UpdateStocksCommandHandler;
