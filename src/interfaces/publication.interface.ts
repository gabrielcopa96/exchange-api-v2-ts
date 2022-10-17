import { SchemaDefinitionProperty } from "mongoose";

export interface Publication {
    references: string;
    state: string;
    id_product: SchemaDefinitionProperty<string>;
    id_user: SchemaDefinitionProperty<string>;
    id_questionxresponse: SchemaDefinitionProperty<string>[];
    id_category: SchemaDefinitionProperty<string>;
    eliminated: boolean
}