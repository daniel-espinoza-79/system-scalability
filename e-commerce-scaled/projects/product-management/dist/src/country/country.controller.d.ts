import CountryService from './country.service';
import CreateCountryDto from './dto/create-country.dto';
import UpdateCountryDto from './dto/update-country.dto';
import Country from './entities/country.entity';
declare class CountryController {
    private readonly countriesService;
    constructor(countriesService: CountryService);
    create(createCountryDto: CreateCountryDto): Promise<Country>;
    findAll(): Promise<Country[]>;
    findOne(id: string): Promise<Country>;
    update(id: string, updateCountryDto: UpdateCountryDto): Promise<Country>;
    remove(id: string): Promise<Country>;
}
export default CountryController;
