import CreateProductsSupplierDto from './dto/create-products-suppliers.dto';
import UpdateProductsSupplierDto from './dto/update-products-suppliers.dto';
import ProductsSuppliers from './entities/products-suppliers.entity';
import ProductsSuppliersService from './products-suppliers.service';
declare class ProductsSuppliersController {
    private readonly productsSuppliersService;
    constructor(productsSuppliersService: ProductsSuppliersService);
    create(createProductsSupplierDto: CreateProductsSupplierDto): Promise<ProductsSuppliers>;
    findAll(): Promise<ProductsSuppliers[]>;
    findOne(productId: string, supplierId: string): Promise<ProductsSuppliers>;
    update(productId: string, supplierId: string, updateProductsSupplierDto: UpdateProductsSupplierDto): Promise<ProductsSuppliers>;
    remove(productId: string, supplierId: string): Promise<ProductsSuppliers>;
}
export default ProductsSuppliersController;
