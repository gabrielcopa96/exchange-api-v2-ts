import { Schema, Types, model, Model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const productSchema = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    img: {
      type: [String],
      required: true,
    },
    id_category: {
      type: [Types.ObjectId],
      ref: "Category",
    },
    id_user: {
      type: Types.ObjectId,
      ref: "Users",
    },
  },
  {
    versionKey: false,
  }
);

const ProductModel = model("Product", productSchema);
export default ProductModel;
