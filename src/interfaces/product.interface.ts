import { SchemaDefinitionProperty } from "mongoose";

export interface Product {
    name: string;
    description: string;
    img: string[];
    id_category: string[];
    id_user: SchemaDefinitionProperty<string>
}