declare class SimpleProductDto {
    id: string;
    name: string;
    description?: string;
    stock: number;
    price: number;
    isAvailable: boolean;
    createdAt: Date;
    category: string;
    brand?: string;
    productImages?: string[];
    suppliers?: string[];
}
export default SimpleProductDto;
