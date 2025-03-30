import { CategoriesService } from "./category.service";
import CategoryDto from "./category.dto";
declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
    findAll(): Promise<CategoryDto[]>;
    findOne(id: string): Promise<CategoryDto>;
}
export default CategoryController;
