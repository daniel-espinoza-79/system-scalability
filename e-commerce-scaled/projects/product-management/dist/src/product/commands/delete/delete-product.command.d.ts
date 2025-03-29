import { ICommand } from '@nestjs/cqrs';
declare class DeleteProductCommand implements ICommand {
    readonly id: string;
    constructor(id: string);
}
export default DeleteProductCommand;
