import { ObjectId, Schema, model } from "mongoose";

export interface IProduct {
    id: number;
    user: ObjectId;
    name: string;
    description: string;
    price: number;
}


const ProductSchema = new Schema<IProduct>({
  id: { type: Number, required: true, unique: true },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
});

export const ProductModel =  model("Product", ProductSchema); 