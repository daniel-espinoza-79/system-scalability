class OrderItem {
  id: string;

  stock: number;

  brand?: string;

  constructor(id: string, stock: number, brand?: string) {
    this.id = id;
    this.stock = stock;
    this.brand = brand;
  }
}

export default OrderItem;
