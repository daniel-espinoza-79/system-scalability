import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import CreateProductCommand from './commands/create/create-product.command';
import DeleteProductCommand from './commands/delete/delete-product.command';
import UpdateProductCommand from './commands/update/update-product.command';
import UpdateStocksCommand from './commands/update-stocks/update-stocks.command';
import CreateProductDto from './dto/create-product.dto';
import OrderItem from './dto/order-item.dto';
import UpdateProductDto from './dto/update-product.dto';
import Product from './entities/product.entity';
import ProductPublisherService from './product-events.publisher';

@Controller('product')
@ApiTags('Product')
class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly publisher: ProductPublisherService
  ) {}

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

  @MessagePattern('order.completed')
  async handleDeleteProduct(@Payload() orderItems: OrderItem[]) {
    await this.commandBus.execute(new UpdateStocksCommand(orderItems));
  }

  @Post('test')
  async test() {
    this.publisher.publishUpdates([
      {
        id: '45a8a62c-5840-4c61-af84-1857f703f6bf',
        stock: 5,
      },

      {
        id: '4645b434-fcac-4b2d-84a8-3459eb819afe',
        stock: 5,
      },
      {
        id: '6bda5f43-4eac-4c30-9d44-440b3b5919c0',
        stock: 5,
      },
    ]);
  }
}
export default ProductController;
