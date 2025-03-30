import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ProductDto } from "./dtos/product.dto";
import { SimpleProductDto } from "./dtos/simple-product";
import { QueryProductDto } from "./dtos/query-product.dto";
import OrderItem from "./dtos/order-item.dto";
declare class ProductController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    findAll(query: QueryProductDto): Promise<SimpleProductDto[]>;
    findOne(id: string): Promise<ProductDto>;
    handleProductCreated(product: SimpleProductDto): Promise<void>;
    handleUpdateProduct(product: SimpleProductDto): Promise<void>;
    handleDeleteProduct({ id }: {
        id: string;
    }): Promise<void>;
    handleStockUpdate(orderItems: OrderItem[]): Promise<void>;
}
export default ProductController;
