import { ICommand } from "@nestjs/cqrs";

import OrderItem from "@/product/dtos/order-item.dto";

class UpdateStocksCommand implements ICommand {
  constructor(public readonly orderItems: OrderItem[]) {}
}

export default UpdateStocksCommand;
