declare class JustProduct {
    id: string;
    name: string;
    description: string;
    stock: number;
    price: number;
    isAvailable: boolean;
    createdAt: Date;
    updatedAt: Date;
    categoryId: string;
    brandId: string;
    constructor(id: string, name: string, description: string, stock: number, price: number, isAvailable: boolean, createdAt: Date, updatedAt: Date, categoryId: string, brandId: string);
}
export default JustProduct;
