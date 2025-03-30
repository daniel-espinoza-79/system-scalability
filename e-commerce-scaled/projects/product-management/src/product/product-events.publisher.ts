// product.publisher.service.ts
import { Injectable } from '@nestjs/common';
import { Client, ClientNats, Inject } from '@nestjs/microservices';

import SimpleProductDto from './dto/simple-product';

@Injectable()
class ProductPublisherService {
  @Client({ transport: Transport.NATS, options: { servers: ['nats://localhost:4222'] } })
  client: ClientNats;

  async publishProductCreated(product: SimpleProductDto): Promise<void> {
    this.client.emit('product.created', product);
  }

  async publishProductUpdated(product: SimpleProductDto): Promise<void> {
    this.client.emit('product.updated', product);
  }

  async publishProductDeleted(id: string): Promise<void> {
    this.client.emit('product.deleted', { id });
  }
}
export default ProductPublisherService;
