import { SuppliersService } from "./suppliers.service";
import { Supplier } from "./supplier.schema";
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    create(createSupplierDto: any): Promise<Supplier>;
    findAll(): Promise<Supplier[]>;
    findById(id: string): Promise<Supplier>;
    update(id: string, updateSupplierDto: any): Promise<Supplier>;
    remove(id: string): Promise<Supplier>;
}
