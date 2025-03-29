import PrismaBrand from '@/brand/entities/prisma-brand.entity';
import PrismaCategory from '@/category/entities/prisma-category.entity';
import ProductImage from '@/product-image/entities/product-image.entity';
import SuppliersOnly from '@/products-suppliers/entities/suppliers-only.entity';
declare class Product {
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly stock: number;
    readonly price: number;
    readonly isAvailable: boolean;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly categoryId: string;
    readonly brandId: string;
    readonly category: PrismaCategory;
    readonly brand: PrismaBrand;
    readonly productImages: ProductImage[];
    readonly productsSuppliers: SuppliersOnly[];
}
export default Product;
