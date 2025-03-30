declare class BrandDto {
    readonly id: string;
    readonly name: string;
    readonly products?: any[];
    constructor(id: string, name: string, products?: any[]);
}
export default BrandDto;
