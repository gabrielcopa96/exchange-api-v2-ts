import { SchemaDefinitionProperty } from "mongoose";

export interface Exchange {
    id_user: SchemaDefinitionProperty<string>;
    id_product: SchemaDefinitionProperty<string>[];
    id_publication: SchemaDefinitionProperty<string>;
    status: 'Pendiente' | 'Rechazado' | 'Concretado'
}