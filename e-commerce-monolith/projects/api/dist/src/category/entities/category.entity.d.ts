import PrismaProduct from '@/product/entities/prisma-product.entity';
declare class Category {
    readonly id: string;
    readonly name: string;
    readonly image: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly products: PrismaProduct[];
}
export default Category;
