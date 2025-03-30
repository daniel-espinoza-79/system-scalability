import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import CreateProductCommand from './commands/create/create-product.command';
import DeleteProductCommand from './commands/delete/delete-product.command';
import UpdateProductCommand from './commands/update/update-product.command';
import CreateProductDto from './dto/create-product.dto';
import UpdateProductDto from './dto/update-product.dto';
import Product from './entities/product.entity';

@Controller('product')
@ApiTags('Product')
class ProductController {
  constructor(private readonly commandBus: CommandBus) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Product' })
  @ApiCreatedResponse({ type: Product })
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.commandBus.execute(new CreateProductCommand(createProductDto));
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product by id' })
  @ApiCreatedResponse({ type: Product })
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto): Promise<Product> {
    return this.commandBus.execute(new UpdateProductCommand(id, updateProductDto));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product by id' })
  @ApiCreatedResponse({ type: Product })
  async remove(@Param('id') id: string): Promise<Product> {
    return this.commandBus.execute(new DeleteProductCommand(id));
  }
}
export default ProductController;
