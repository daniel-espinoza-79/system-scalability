import { ICommandHandler } from '@nestjs/cqrs';
import Product from '@/product/entities/product.entity';
import ProductMapping from '@/product/product.mapping';
import ProductService from '@/product/product.service';
import ProductPublisherService from '@/product/product-events.publisher';
import UpdateProductCommand from './update-product.command';
declare class UpdateProductHandler implements ICommandHandler<UpdateProductCommand> {
    private readonly productService;
    private readonly mapping;
    private readonly publisher;
    constructor(productService: ProductService, mapping: ProductMapping, publisher: ProductPublisherService);
    execute(command: UpdateProductCommand): Promise<Product>;
}
export default UpdateProductHandler;
