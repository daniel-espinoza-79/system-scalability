import { ICommandHandler } from "@nestjs/cqrs";
import { ProductsService } from "@/product/product.service";
import UpdateStocksCommand from "./update-stocks.command";
declare class UpdateStocksCommandHandler implements ICommandHandler<UpdateStocksCommand> {
    private readonly productService;
    constructor(productService: ProductsService);
    execute(command: UpdateStocksCommand): Promise<void>;
}
export default UpdateStocksCommandHandler;
