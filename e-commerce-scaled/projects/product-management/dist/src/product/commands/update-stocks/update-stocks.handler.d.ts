import { ICommandHandler } from '@nestjs/cqrs';
import ProductService from '@/product/product.service';
import ProductPublisherService from '@/product/product-events.publisher';
import UpdateStocksCommand from './update-stocks.command';
declare class UpdateStocksCommandHandler implements ICommandHandler<UpdateStocksCommand> {
    private readonly productService;
    private readonly publisher;
    constructor(productService: ProductService, publisher: ProductPublisherService);
    execute(command: UpdateStocksCommand): Promise<void>;
}
export default UpdateStocksCommandHandler;
