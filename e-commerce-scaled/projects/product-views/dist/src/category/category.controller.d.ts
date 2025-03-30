import { Category } from "./category.schema";
import { CategoriesService } from "./category.service";
declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
}
export default CategoryController;
