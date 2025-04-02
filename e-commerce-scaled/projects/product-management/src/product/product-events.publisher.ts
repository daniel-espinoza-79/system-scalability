// product.publisher.service.ts
import { Injectable } from '@nestjs/common';
import { Client, ClientNats, Transport } from '@nestjs/microservices';

import OrderItem from './dto/order-item.dto';
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

  async publishNewStockUpdate(items: OrderItem[]) {
    this.client.emit('product.stock-updated', items);
  }

  publishUpdates(arg0: { id: string; stock: number }[]) {
    this.client.emit('order.completed', arg0);
  }
}
export default ProductPublisherService;
