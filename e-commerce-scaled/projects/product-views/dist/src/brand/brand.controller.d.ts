import { BrandsService } from "./brand.service";
import { Brand } from "./brand.schema";
declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandsService);
    findAll(): Promise<Brand[]>;
    findOne(id: string): Promise<Brand>;
}
export default BrandController;
