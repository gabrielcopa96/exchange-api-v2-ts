import { Product } from "../interfaces/product.interface"
import ProductModel from "../models/product"


const getOneProduct = async (id: string) => {

    const product = await ProductModel.findById( id )

    if(!product) {
        return "ERROR_NOT_PRODUCT_EXIST"
    }

    return product
}

const getAllProducts = async () => {

    const products = await ProductModel.find({})

    if(!products) {
        return "ERROR_NOT_PRODUCT"
    }

    return products
}

const newProduct = async ( body: Product ) => {
    
    const product = await ProductModel.create( body )

    return product

}

export { getOneProduct, getAllProducts, newProduct }