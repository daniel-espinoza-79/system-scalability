import { ICommand } from "@nestjs/cqrs";
import { SimpleProductDto } from "../../dtos/simple-product";
export declare class ProductCreatedCommand implements ICommand {
    readonly product: SimpleProductDto;
    constructor(product: SimpleProductDto);
}
