declare class CreateProductDto {
    readonly name: string;
    readonly description: string;
    readonly stock: number;
    readonly price: number;
    readonly categoryId: string;
    readonly brandId: string;
}
export default CreateProductDto;
