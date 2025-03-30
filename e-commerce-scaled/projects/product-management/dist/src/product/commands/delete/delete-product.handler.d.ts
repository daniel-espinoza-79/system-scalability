import { ICommandHandler } from '@nestjs/cqrs';
import ProductPublisherService from '@/product/product-events.publisher';
import Product from '../../entities/product.entity';
import ProductService from '../../product.service';
import DeleteProductCommand from './delete-product.command';
declare class DeleteProductHandler implements ICommandHandler<DeleteProductCommand> {
    private readonly productService;
    private readonly publisher;
    constructor(productService: ProductService, publisher: ProductPublisherService);
    execute(command: DeleteProductCommand): Promise<Product>;
}
export default DeleteProductHandler;
