import { Exchange } from "../interfaces/exchange.interface";
import ExchangeModel from "../models/exchange";
import PublicationModel from "../models/publication";
import UserModel from "../models/user";

const newExchange = async ( body: Exchange) => {

    const exchange = await ExchangeModel.create( body )

    const { status } = exchange

    const publication = await PublicationModel.findById( body.id_publication )

    await UserModel.findByIdAndUpdate(publication?._id, {
        $push: { exchange: exchange._id }
    }, { new: true })

    if(status) {
        return {
            ok: true,
            msg: 'Se creo correctamente el intercambio',
            exchange
        }
    }

    return {
        ok: false,
        msg: 'No se pudo crear el intermcabio, verifique todo de vuelta'
    }
}

const getAllExchanges = async () => {

    const exchanges = await ExchangeModel.find({})

    if(exchanges.length) {
        return {
            ok: true,
            msg: 'Se obtuvo todos los intercambios',
            exchanges
        }
    }

    return {
        ok: false,
        msg: 'Error vuelve a intentarlo'
    }
}

export { newExchange, getAllExchanges }