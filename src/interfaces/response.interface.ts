import { SchemaDefinitionProperty } from "mongoose";

export interface Response {
    message: string,
    id_user: SchemaDefinitionProperty<string>
}

export interface ModelResponse extends Response {
    id_questionxrepsonse: SchemaDefinitionProperty<string>
}