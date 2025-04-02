import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class Supplier extends Document {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  deliveryTime: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  tax: number;
}

export const SupplierSchema = SchemaFactory.createForClass(Supplier);
