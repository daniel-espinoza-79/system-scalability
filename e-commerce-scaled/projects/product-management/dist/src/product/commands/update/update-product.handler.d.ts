import { ICommandHandler } from '@nestjs/cqrs';
import Product from '@/product/entities/product.entity';
import ProductService from '@/product/product.service';
import UpdateProductCommand from './update-product.command';
declare class UpdateProductHandler implements ICommandHandler<UpdateProductCommand> {
    private readonly productService;
    constructor(productService: ProductService);
    execute(command: UpdateProductCommand): Promise<Product>;
}
export default UpdateProductHandler;
