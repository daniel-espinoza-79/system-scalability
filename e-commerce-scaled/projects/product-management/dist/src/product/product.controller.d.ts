import { CommandBus } from '@nestjs/cqrs';
import CreateProductDto from './dto/create-product.dto';
import UpdateProductDto from './dto/update-product.dto';
import Product from './entities/product.entity';
declare class ProductController {
    private readonly commandBus;
    constructor(commandBus: CommandBus);
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<Product>;
}
export default ProductController;
