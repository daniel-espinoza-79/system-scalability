import { ICommandHandler } from "@nestjs/cqrs";
import { ProductDeletedCommand } from "./product-deleted.command";
import { ProductsService } from "../../product.service";
import { BrandsService } from "@/brand/brand.service";
export declare class ProductDeletedHandler implements ICommandHandler<ProductDeletedCommand> {
    private readonly productService;
    private readonly brandService;
    constructor(productService: ProductsService, brandService: BrandsService);
    execute(command: ProductDeletedCommand): Promise<void>;
}
