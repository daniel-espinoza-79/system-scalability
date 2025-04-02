import ProductImage from '@/product-image/entities/product-image.entity';
declare class PrismaProduct {
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
    readonly productImages: ProductImage[];
}
export default PrismaProduct;
