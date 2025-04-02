import PrismaService from '@/prisma/prisma.service';
import OrderItem from '../purchases/dto/order-item.dto';
import CreateProductDto from './dto/create-product.dto';
import UpdateProductDto from './dto/update-product.dto';
import Product from './entities/product.entity';
declare class ProductService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductDto: CreateProductDto): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: string, updateProductDto: UpdateProductDto): Promise<Product>;
    bulkStockUpdate(orderItems: OrderItem[]): Promise<void>;
    remove(id: string): Promise<Product>;
}
export default ProductService;
