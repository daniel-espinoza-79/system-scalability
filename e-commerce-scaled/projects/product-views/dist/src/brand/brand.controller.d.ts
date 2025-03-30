import { BrandsService } from "./brand.service";
import BrandDto from "./brand.dto";
declare class BrandController {
    private readonly brandService;
    constructor(brandService: BrandsService);
    findAll(): Promise<BrandDto[]>;
    findOne(id: string): Promise<BrandDto>;
}
export default BrandController;
