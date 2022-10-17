import { SchemaDefinitionProperty } from "mongoose";

export interface ResponseXQuestion {
    id_question: SchemaDefinitionProperty<string>;
    id_response: SchemaDefinitionProperty<string>;
}