import PrismaCategoryProduct from '@/product/entities/prisma-category-product.entity';
declare class Brand {
    readonly id: string;
    readonly name: string;
    readonly logo: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly products: PrismaCategoryProduct[];
}
export default Brand;
