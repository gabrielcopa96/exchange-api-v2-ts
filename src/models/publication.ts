import { Schema, Types, model, Model } from "mongoose";
import { Publication } from "../interfaces/publication.interface";

const publicationSchema = new Schema<Publication>(
  {
    references: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      // enum: ['Finalizada', 'En proceso', 'Pendiente']
    },
    id_product: {
      type: Types.ObjectId,
      ref: "Product",
    },
    id_questionxresponse: {
      type: [Types.ObjectId],
      ref: "QuestionXResponses",
    },
    id_category: {
      type: Types.ObjectId,
      ref: "Category",
    },
    eliminated: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

const PublicationModel = model("Publications", publicationSchema);
export default PublicationModel;
