import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  stock: number;

  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  isAvailable: boolean;

  @Prop({ required: true })
  createdAt: Date;

  @Prop({ required: true })
  category: string;

  @Prop()
  brand: string;

  @Prop([String])
  productImages: string[];

  @Prop([String])
  suppliers: string[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
