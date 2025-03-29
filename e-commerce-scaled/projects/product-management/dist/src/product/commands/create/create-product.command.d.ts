import { ICommand } from '@nestjs/cqrs';
import CreateProductDto from '../../dto/create-product.dto';
declare class CreateProductCommand implements ICommand {
    readonly createProductDto: CreateProductDto;
    constructor(createProductDto: CreateProductDto);
}
export default CreateProductCommand;
