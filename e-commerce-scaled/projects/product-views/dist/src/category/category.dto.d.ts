declare class CategoryDto {
    readonly id: string;
    readonly name: string;
    readonly image?: string;
    constructor(id: string, name: string, image?: string);
}
export default CategoryDto;
