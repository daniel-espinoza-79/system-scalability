import { ICommand } from "@nestjs/cqrs";
import { SimpleProductDto } from "../../dtos/simple-product";

export class ProductCreatedCommand implements ICommand {
  constructor(public readonly product: SimpleProductDto) {}
}
