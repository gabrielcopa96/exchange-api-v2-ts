import CategoryModel from "../models/category";
import { Category } from "../interfaces/category.interface";

const insertCategory = async (category: Category) => {
  const responseInsert = await CategoryModel.create(category);
  return responseInsert;
};

const getAllCategories = async () => {
  const responseGet = await CategoryModel.find();
  return responseGet;
};

const getOneCategory = async (id: string) => {
  const reponseGet = await CategoryModel.findById(id);
  return reponseGet;
};

export { insertCategory, getAllCategories, getOneCategory };
