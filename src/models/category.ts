import { Schema, Types, model, Model } from "mongoose";
import { Category } from "../interfaces/category.interface";

const CategorySchema = new Schema<Category>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const CategoryModel = model("Category", CategorySchema);
export default CategoryModel;
