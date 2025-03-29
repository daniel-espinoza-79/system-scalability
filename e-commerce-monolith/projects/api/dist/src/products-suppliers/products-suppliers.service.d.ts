import PrismaService from '@/prisma/prisma.service';
import CreateProductsSupplierDto from './dto/create-products-suppliers.dto';
import UpdateProductsSupplierDto from './dto/update-products-suppliers.dto';
import ProductsSuppliers from './entities/products-suppliers.entity';
declare class ProductsSuppliersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createProductsSupplierDto: CreateProductsSupplierDto): Promise<ProductsSuppliers>;
    findAll(): Promise<ProductsSuppliers[]>;
    findOne(productId: string, supplierId: string): Promise<ProductsSuppliers>;
    update(productId: string, supplierId: string, updateProductsSupplierDto: UpdateProductsSupplierDto): Promise<ProductsSuppliers>;
    remove(productId: string, supplierId: string): Promise<ProductsSuppliers>;
}
export default ProductsSuppliersService;
