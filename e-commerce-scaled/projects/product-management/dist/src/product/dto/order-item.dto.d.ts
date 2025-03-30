declare class OrderItem {
    id: string;
    stock: number;
    brand?: string;
    constructor(id: string, stock: number, brand?: string);
}
export default OrderItem;
