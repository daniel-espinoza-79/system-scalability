import { ICommand } from "@nestjs/cqrs";

export class ProductDeletedCommand implements ICommand {
  constructor(public readonly productId: string) {}
}
