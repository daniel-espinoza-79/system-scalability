import { ICommand } from '@nestjs/cqrs';

class DeleteProductCommand implements ICommand {
  constructor(public readonly id: string) {}
}

export default DeleteProductCommand;
