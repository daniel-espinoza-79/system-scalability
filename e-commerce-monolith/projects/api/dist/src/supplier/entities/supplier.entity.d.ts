import Country from '@/country/entities/country.entity';
declare class Supplier {
    readonly id: string;
    readonly email: string;
    readonly deliveryTime: number;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly countryId: string;
    readonly country: Country;
}
export default Supplier;
