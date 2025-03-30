import { ICommandHandler } from "@nestjs/cqrs";
import { ProductCreatedCommand } from "./product-created.command";
import { ProductsService } from "../../product.service";
import { BrandsService } from "@/brand/brand.service";
export declare class ProductCreatedHandler implements ICommandHandler<ProductCreatedCommand> {
    private readonly productService;
    private readonly brandService;
    constructor(productService: ProductsService, brandService: BrandsService);
    execute(command: ProductCreatedCommand): Promise<void>;
}
