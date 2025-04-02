import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import CreateProductsSupplierDto from './dto/create-products-suppliers.dto';
import UpdateProductsSupplierDto from './dto/update-products-suppliers.dto';
import ProductsSuppliers from './entities/products-suppliers.entity';
import ProductsSuppliersService from './products-suppliers.service';

@ApiTags('Products Suppliers')
@Controller('products-suppliers')
class ProductsSuppliersController {
  constructor(private readonly productsSuppliersService: ProductsSuppliersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new products supplier' })
  @ApiCreatedResponse({ type: ProductsSuppliers })
  async create(@Body() createProductsSupplierDto: CreateProductsSupplierDto): Promise<ProductsSuppliers> {
    const productsSuppliers: ProductsSuppliers = await this.productsSuppliersService.create(createProductsSupplierDto);
    return productsSuppliers;
  }

  @Get()
  @ApiOperation({ summary: 'Get all products suppliers' })
  @ApiCreatedResponse({ type: ProductsSuppliers, isArray: true })
  async findAll(): Promise<ProductsSuppliers[]> {
    const productsSuppliers: ProductsSuppliers[] = await this.productsSuppliersService.findAll();
    return productsSuppliers;
  }

  @Get(':productId/:supplierId')
  @ApiOperation({ summary: 'Get a products supplier by id' })
  @ApiCreatedResponse({ type: ProductsSuppliers })
  async findOne(
    @Param('productId') productId: string,
    @Param('supplierId') supplierId: string
  ): Promise<ProductsSuppliers> {
    const productsSuppliers: ProductsSuppliers = await this.productsSuppliersService.findOne(productId, supplierId);
    return productsSuppliers;
  }

  @Patch(':productId/:supplierId')
  @ApiOperation({ summary: 'Update a products supplier by id' })
  @ApiCreatedResponse({ type: ProductsSuppliers })
  async update(
    @Param('productId') productId: string,
    @Param('supplierId') supplierId: string,
    @Body() updateProductsSupplierDto: UpdateProductsSupplierDto
  ): Promise<ProductsSuppliers> {
    const productsSuppliers: ProductsSuppliers = await this.productsSuppliersService.update(
      productId,
      supplierId,
      updateProductsSupplierDto
    );
    return productsSuppliers;
  }

  @Delete(':productId/:supplierId')
  @ApiOperation({ summary: 'Delete a products supplier by id' })
  @ApiCreatedResponse({ type: ProductsSuppliers })
  async remove(
    @Param('productId') productId: string,
    @Param('supplierId') supplierId: string
  ): Promise<ProductsSuppliers> {
    const productsSuppliers: ProductsSuppliers = await this.productsSuppliersService.remove(productId, supplierId);
    return productsSuppliers;
  }
}

export default ProductsSuppliersController;
