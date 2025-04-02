import { ICommand } from '@nestjs/cqrs';

import UpdateProductDto from '../../dto/update-product.dto';

class UpdateProductCommand implements ICommand {
  constructor(
    public readonly id: string,
    public readonly updateProductDto: UpdateProductDto
  ) {}
}

export default UpdateProductCommand;
