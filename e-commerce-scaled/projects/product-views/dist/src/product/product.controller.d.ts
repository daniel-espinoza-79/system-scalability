import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ProductDto } from "./dtos/product.dto";
import { SimpleProductDto } from "./dtos/simple-product";
import { QueryProductDto } from "./dtos/query-product.dto";
declare class ProductController {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: CommandBus, queryBus: QueryBus);
    findAll(query: QueryProductDto): Promise<SimpleProductDto[]>;
    findOne(id: string): Promise<ProductDto>;
}
export default ProductController;
