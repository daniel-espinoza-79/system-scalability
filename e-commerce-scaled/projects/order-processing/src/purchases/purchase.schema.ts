import { Schema, Document } from 'mongoose';

export const PurchaseSchema = new Schema({
  products: [
    {
      id: { type: String, required: true },
      amount: { type: Number, required: true },
      price_per_unit: { type: Number, required: true },
      price_per_products: { type: Number, required: true },
    },
  ],
  subtotal: { type: Number, required: true },
  taxes: { type: Number, required: true },
  total: { type: Number, required: true },
});

export interface Purchase extends Document {
  id: string;
  products: Array<{
    id: string;
    amount: number;
    price_per_unit: number;
    price_per_products: number;
  }>;
  subtotal: number;
  taxes: number;
  total: number;
}
