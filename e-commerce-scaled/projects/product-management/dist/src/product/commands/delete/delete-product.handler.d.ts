import { ICommandHandler } from '@nestjs/cqrs';
import Product from '../../entities/product.entity';
import ProductService from '../../product.service';
import DeleteProductCommand from './delete-product.command';
declare class DeleteProductHandler implements ICommandHandler<DeleteProductCommand> {
    private readonly productService;
    constructor(productService: ProductService);
    execute(command: DeleteProductCommand): Promise<Product>;
}
export default DeleteProductHandler;
