import CreateBrandDto from '@/brand/dto/create-brand.dto';
import CreateCategoryDto from '@/category/dto/create-category.dto';
import CreateCountryDto from '@/country/dto/create-country.dto';
declare const countries: CreateCountryDto[];
declare const brands: CreateBrandDto[];
declare const categories: CreateCategoryDto[];
declare const products: ({
    name: string;
    description: string;
    stock: number;
    price: number;
    isAvailable?: undefined;
} | {
    name: string;
    description: string;
    stock: number;
    price: number;
    isAvailable: boolean;
})[];
export { brands, categories, countries, products };
