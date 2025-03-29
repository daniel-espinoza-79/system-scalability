import { ICommandHandler } from '@nestjs/cqrs';
import Product from '../../entities/product.entity';
import ProductService from '../../product.service';
import CreateProductCommand from './create-product.command';
declare class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
    private readonly productService;
    constructor(productService: ProductService);
    execute(command: CreateProductCommand): Promise<Product>;
}
export default CreateProductHandler;
