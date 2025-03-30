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
import { Product } from "./schemas/product.schema";
import GetProductsQuery from "./queries/get-all/get-products.query";
import GetProductQuery from "./queries/get-by-id/get-product.query";
import { ProductDto } from "./dtos/product.dto";
import { SimpleProductDto } from "./dtos/simple-product";
import { QueryProductDto } from "./dtos/query-product.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { ProductCreatedCommand } from "./commands/create/product-created.command";
import { ProductUpdatedCommand } from "./commands/update/product-updated.command";
import { ProductDeletedCommand } from "./commands/delete/product-deleted.command";
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
}
export default ProductController;
