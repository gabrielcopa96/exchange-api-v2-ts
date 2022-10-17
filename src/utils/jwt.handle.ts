import { sign, verify } from "jsonwebtoken"

const SECRET = process.env.SECRET || 'token.0101'

const generateToken = ( email: string ) => {

    const jwt = sign( { email }, SECRET, {
        expiresIn: "1d",
    } )

    return jwt;
}

const verifyToken = (jwt: string ) => {

    const isOk = verify( jwt, SECRET )

    return isOk

}

export { generateToken, verifyToken }