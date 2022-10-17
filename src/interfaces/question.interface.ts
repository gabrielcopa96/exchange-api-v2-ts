import { SchemaDefinitionProperty } from "mongoose";

export interface Question {
    message: string;
    id_user: SchemaDefinitionProperty<string>
}

export interface ModelQuestion extends Question {
  id_publication: SchemaDefinitionProperty<string>;
}