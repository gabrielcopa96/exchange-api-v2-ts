import { Schema, Types, model, Model } from "mongoose";
import { Exchange } from "../interfaces/exchange.interface";

const exchangeSchema = new Schema<Exchange>(
  {
    id_user: {
      type: Types.ObjectId,
      ref: "Users",
    },
    id_product: {
      type: [Types.ObjectId],
      ref: "Products",
    },
    id_publication: {
      type: Types.ObjectId,
      ref: "Publications",
    },
    status: {
      type: String,
      enum: ["Pendiente", "Rechazado", "Concretado"],
    },
  },
  {
    versionKey: false,
  }
);

const ExchangeModel = model("Exchange", exchangeSchema);
export default ExchangeModel;