import SimpleProductDto from './dto/simple-product';
import Product from './entities/product.entity';
declare class ProductMapping {
    mapToSimpleProduct(product: Product, category?: string, brand?: string, supplier?: string[]): SimpleProductDto;
}
export default ProductMapping;
