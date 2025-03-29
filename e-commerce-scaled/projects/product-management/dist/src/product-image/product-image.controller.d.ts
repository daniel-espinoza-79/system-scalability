import CreateProductImageDto from './dto/create-product-image.dto';
import UpdateProductImageDto from './dto/update-product-image.dto';
import ProductImage from './entities/product-image.entity';
import ProductImageService from './product-image.service';
declare class ProductImageController {
    private readonly productImageService;
    constructor(productImageService: ProductImageService);
    create(createProductImageDto: CreateProductImageDto): Promise<ProductImage>;
    findAll(): Promise<ProductImage[]>;
    findOne(id: string): Promise<ProductImage>;
    update(id: string, updateProductImageDto: UpdateProductImageDto): Promise<ProductImage>;
    remove(id: string): Promise<ProductImage>;
}
export default ProductImageController;
