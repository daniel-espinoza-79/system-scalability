import { ICommand } from '@nestjs/cqrs';
import UpdateProductDto from '../../dto/update-product.dto';
declare class UpdateProductCommand implements ICommand {
    readonly id: string;
    readonly updateProductDto: UpdateProductDto;
    constructor(id: string, updateProductDto: UpdateProductDto);
}
export default UpdateProductCommand;
