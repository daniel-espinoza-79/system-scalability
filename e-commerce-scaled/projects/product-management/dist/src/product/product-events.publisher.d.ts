import { ClientNats } from '@nestjs/microservices';
import OrderItem from './dto/order-item.dto';
import SimpleProductDto from './dto/simple-product';
declare class ProductPublisherService {
    client: ClientNats;
    publishProductCreated(product: SimpleProductDto): Promise<void>;
    publishProductUpdated(product: SimpleProductDto): Promise<void>;
    publishProductDeleted(id: string): Promise<void>;
    publishNewStockUpdate(items: OrderItem[]): Promise<void>;
    publishUpdates(arg0: {
        id: string;
        stock: number;
    }[]): void;
}
export default ProductPublisherService;
