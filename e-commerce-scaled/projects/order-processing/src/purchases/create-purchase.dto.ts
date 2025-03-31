export class CreatePurchaseDto {
  readonly products: Array<{
    id: string;
    amount: number;
    price_per_unit: number;
    price_per_products: number;
  }>;
  readonly subtotal: number;
  readonly taxes: number;
  readonly total: number;
}
