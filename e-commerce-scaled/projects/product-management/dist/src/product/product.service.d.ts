import PrismaService from '@/prisma/prisma.service';
import CreateProductDto from './dto/create-product.dto';
import OrderItem from './dto/order-item.dto';
import UpdateProductDto from './dto/update-product.dto';
import JustProduct from './entities/just-product.entity';
import Product from './entities/product.entity';
declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    findManyByIds(ids: string[]): Promise<JustProduct[]>;
    bulkStockUpdate(orderItems: OrderItem[]): Promise<void>;
    remove(id: string): Promise<Product>;
}
export default ProductService;
