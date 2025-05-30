import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

import CreateProductImageDto from './dto/create-product-image.dto';
import UpdateProductImageDto from './dto/update-product-image.dto';
import ProductImage from './entities/product-image.entity';
import ProductImageService from './product-image.service';

@ApiTags('Product Image')
@Controller('product-image')
class ProductImageController {
  constructor(private readonly productImageService: ProductImageService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new product image' })
  @ApiCreatedResponse({ type: ProductImage })
  async create(@Body() createProductImageDto: CreateProductImageDto): Promise<ProductImage> {
    const productImage: ProductImage = await this.productImageService.create(createProductImageDto);
    return productImage;
  }

  @Get()
  @ApiOperation({ summary: 'Get all product images' })
  @ApiCreatedResponse({ type: ProductImage, isArray: true })
  async findAll(): Promise<ProductImage[]> {
    const productImages: ProductImage[] = await this.productImageService.findAll();
    return productImages;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a product image by id' })
  @ApiCreatedResponse({ type: ProductImage })
  async findOne(@Param('id') id: string): Promise<ProductImage> {
    const productImage: ProductImage = await this.productImageService.findOne(id);
    return productImage;
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a product image by id' })
  @ApiCreatedResponse({ type: ProductImage })
  async update(@Param('id') id: string, @Body() updateProductImageDto: UpdateProductImageDto): Promise<ProductImage> {
    const productImage: ProductImage = await this.productImageService.update(id, updateProductImageDto);
    return productImage;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a product image by id' })
  @ApiCreatedResponse({ type: ProductImage })
  async remove(@Param('id') id: string): Promise<ProductImage> {
    const productImage: ProductImage = await this.productImageService.remove(id);
    return productImage;
  }
}

export default ProductImageController;
