import { SupplierDto } from "./supplier.dto";
export declare class ProductDto {
    id: string;
    name: string;
    description?: string;
    stock: number;
    price: number;
    isAvailable: boolean;
    createdAt: Date;
    category: string;
    brand?: string;
    productImages: string[];
    suppliers: SupplierDto[];
}
