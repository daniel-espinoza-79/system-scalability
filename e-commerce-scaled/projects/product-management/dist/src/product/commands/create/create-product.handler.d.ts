import { ICommandHandler } from '@nestjs/cqrs';
import BrandService from '@/brand/brand.service';
import CategoryService from '@/category/category.service';
import ProductMapping from '@/product/product.mapping';
import ProductPublisherService from '@/product/product-events.publisher';
import Product from '../../entities/product.entity';
import ProductService from '../../product.service';
import CreateProductCommand from './create-product.command';
declare class CreateProductHandler implements ICommandHandler<CreateProductCommand> {
    private readonly productService;
    private readonly publisher;
    private readonly categoryService;
    private readonly brandService;
    private readonly productMapping;
    constructor(productService: ProductService, publisher: ProductPublisherService, categoryService: CategoryService, brandService: BrandService, productMapping: ProductMapping);
    execute(command: CreateProductCommand): Promise<Product>;
}
export default CreateProductHandler;
