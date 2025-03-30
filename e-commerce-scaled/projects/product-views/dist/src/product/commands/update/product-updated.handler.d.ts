import { ICommandHandler } from "@nestjs/cqrs";
import { ProductUpdatedCommand } from "./product-updated.command";
import { ProductsService } from "../../product.service";
import { BrandsService } from "@/brand/brand.service";
export declare class ProductUpdatedHandler implements ICommandHandler<ProductUpdatedCommand> {
    private readonly productService;
    private readonly brandService;
    constructor(productService: ProductsService, brandService: BrandsService);
    execute(command: ProductUpdatedCommand): Promise<void>;
}
