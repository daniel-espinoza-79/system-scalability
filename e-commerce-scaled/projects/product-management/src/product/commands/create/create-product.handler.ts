import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';

import BrandService from '@/brand/brand.service';
import CategoryService from '@/category/category.service';
import ProductMapping from '@/product/product.mapping';
import ProductPublisherService from '@/product/product-events.publisher';

import Product from '../../entities/product.entity';
import ProductService from '../../product.service';
import CreateProductCommand from './create-product.command';

@CommandHandler(CreateProductCommand)
class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
  constructor(
    private readonly productService: ProductService,
    private readonly publisher: ProductPublisherService,
    private readonly categoryService: CategoryService,
    private readonly brandService: BrandService,
    private readonly productMapping: ProductMapping
  ) {}

  async execute(command: CreateProductCommand): Promise<Product> {
    const product = await this.productService.create(command.createProductDto);
    const category = await this.categoryService.findOne(product.categoryId);
    const brand = await this.brandService.findOne(product.brandId);
    this.publisher.publishProductCreated(this.productMapping.mapToSimpleProduct(product, category.name, brand.name));
    return product;
  }
}

export default CreateProductHandler;
