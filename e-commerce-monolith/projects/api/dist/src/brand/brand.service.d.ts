import PrismaService from '@/prisma/prisma.service';
import CreateBrandDto from './dto/create-brand.dto';
import UpdateBrandDto from './dto/update-brand.dto';
import Brand from './entities/brand.entity';
declare class BrandService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createBrandDto: CreateBrandDto): Promise<Brand>;
    findAll(): Promise<Brand[]>;
    findOne(id: string): Promise<Brand>;
    update(id: string, updateBrandDto: UpdateBrandDto): Promise<Brand>;
    remove(id: string): Promise<Brand>;
}
export default BrandService;
