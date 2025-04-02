import PrismaService from '@/prisma/prisma.service';
import CreateProductImageDto from './dto/create-product-image.dto';
import UpdateProductImageDto from './dto/update-product-image.dto';
import ProductImage from './entities/product-image.entity';
declare class ProductImageService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductImageDto: CreateProductImageDto): Promise<ProductImage>;
    findAll(): Promise<ProductImage[]>;
    findOne(id: string): Promise<ProductImage>;
    update(id: string, updateProductImageDto: UpdateProductImageDto): Promise<ProductImage>;
    remove(id: string): Promise<ProductImage>;
}
export default ProductImageService;
