import { CommandBus } from '@nestjs/cqrs';
import CreateProductDto from './dto/create-product.dto';
import OrderItem from './dto/order-item.dto';
import UpdateProductDto from './dto/update-product.dto';
import Product from './entities/product.entity';
import ProductPublisherService from './product-events.publisher';
declare class ProductController {
    private readonly commandBus;
    private readonly publisher;
    constructor(commandBus: CommandBus, publisher: ProductPublisherService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    remove(id: string): Promise<Product>;
    handleDeleteProduct(orderItems: OrderItem[]): Promise<void>;
    test(): Promise<void>;
}
export default ProductController;
