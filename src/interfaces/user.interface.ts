import { SchemaDefinitionProperty } from "mongoose";
import { Auth } from "./auth.interface";

export interface User extends Auth {
    name: string;
    surname: string;
    image_profile: string;
    chat: SchemaDefinitionProperty<string>[];
    username: string;
    publications: SchemaDefinitionProperty<string>[];
    exchange: SchemaDefinitionProperty<string>[];
    typeUser: 'admin' | 'usercommon'
}