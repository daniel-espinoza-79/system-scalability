import { ICommand } from '@nestjs/cqrs';
import OrderItem from '@/product/dto/order-item.dto';
declare class UpdateStocksCommand implements ICommand {
    readonly orderItems: OrderItem[];
    constructor(orderItems: OrderItem[]);
}
export default UpdateStocksCommand;
