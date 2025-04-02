import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { ApiCreatedResponse, ApiOperation, ApiTags } from "@nestjs/swagger";
import GetProductsQuery from "./queries/get-all/get-products.query";
import GetProductQuery from "./queries/get-by-id/get-product.query";
import { ProductDto } from "./dtos/product.dto";
import { SimpleProductDto } from "./dtos/simple-product";
import { QueryProductDto } from "./dtos/query-product.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ProductCreatedCommand } from "./commands/create/product-created.command";
import { ProductUpdatedCommand } from "./commands/update/product-updated.command";
import { ProductDeletedCommand } from "./commands/delete/product-deleted.command";
import OrderItem from "./dtos/order-item.dto";
import UpdateStocksCommand from "./commands/update-stocks/update-stocks.command";
@Controller("product")
@ApiTags("Product")
class ProductController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus
  ) {}

  @Get()
  @ApiOperation({ summary: "Get all products" })
  @ApiCreatedResponse({ type: SimpleProductDto, isArray: true })
  async findAll(@Query() query: QueryProductDto): Promise<SimpleProductDto[]> {
    return this.queryBus.execute(new GetProductsQuery(query));
  }

  @Get(":id")
  @ApiOperation({ summary: "Get a product by id" })
  @ApiCreatedResponse({ type: ProductDto })
  async findOne(@Param("id") id: string): Promise<ProductDto> {
    return this.queryBus.execute(new GetProductQuery(id));
  }

  @MessagePattern("product.created")
  async handleProductCreated(@Payload() product: SimpleProductDto) {
    await this.commandBus.execute(new ProductCreatedCommand(product));
  }

  @MessagePattern("product.updated")
  async handleUpdateProduct(@Payload() product: SimpleProductDto) {
    await this.commandBus.execute(new ProductUpdatedCommand(product));
  }

  @MessagePattern("product.deleted")
  async handleDeleteProduct(@Payload() { id }: { id: string }) {
    await this.commandBus.execute(new ProductDeletedCommand(id));
  }

  @MessagePattern("product.stock-updated")
  async handleStockUpdate(@Payload() orderItems: OrderItem[]) {
    await this.commandBus.execute(new UpdateStocksCommand(orderItems));
  }
}
export default ProductController;
