import { IQuery } from '@nestjs/cqrs';

class GetProductQuery implements IQuery {
  constructor(public readonly id: string) {}
}

export default GetProductQuery;
