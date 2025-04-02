import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";

import { ProductsService } from "@/product/product.service";

import UpdateStocksCommand from "./update-stocks.command";

@CommandHandler(UpdateStocksCommand)
class UpdateStocksCommandHandler implements ICommandHandler<UpdateStocksCommand> {
  constructor(
    private readonly productService: ProductsService
  ) {}

  async execute(command: UpdateStocksCommand): Promise<void> {
    await this.productService.bulkUpdateStock(command.orderItems);
  }
}

export default UpdateStocksCommandHandler;
