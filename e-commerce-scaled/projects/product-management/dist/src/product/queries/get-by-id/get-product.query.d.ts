import { IQuery } from '@nestjs/cqrs';
declare class GetProductQuery implements IQuery {
    readonly id: string;
    constructor(id: string);
}
export default GetProductQuery;
