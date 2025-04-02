import PrismaCategory from '@/category/entities/prisma-category.entity';
import PrismaProduct from './prisma-product.entity';
declare class PrismaCategoryProduct extends PrismaProduct {
    readonly category: PrismaCategory;
}
export default PrismaCategoryProduct;
