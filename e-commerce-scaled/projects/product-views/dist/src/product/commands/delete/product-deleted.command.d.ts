import { ICommand } from "@nestjs/cqrs";
export declare class ProductDeletedCommand implements ICommand {
    readonly productId: string;
    constructor(productId: string);
}
