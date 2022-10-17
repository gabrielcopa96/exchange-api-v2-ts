import { SchemaDefinitionProperty } from "mongoose";

export interface Message {
    id_user: SchemaDefinitionProperty<string>;
    message: string
}

export interface ModelMessage extends Message {
    id_chat: SchemaDefinitionProperty<string>;
    id_userReceptor: SchemaDefinitionProperty<string>;
}