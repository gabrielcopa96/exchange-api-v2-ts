import { Auth } from "../interfaces/auth.interface"
import { User } from "../interfaces/user.interface";
import UserModel from "../models/user"
import { generateToken } from "../utils/jwt.handle";
import { encrypt, verified } from "../utils/password.handle";

const registerNewUser = async ( { email, password, name, surname, username, typeUser }: User ) => {

    const checkIs = await UserModel.findOne({ email: email })
    
    if(checkIs) return "ALREADY_USER";

    const passHash = await encrypt(password);
    const registerUser = await UserModel.create({
        email,
        password: passHash,
        name,
        surname,
        username,
        typeUser
    })

    return registerUser;
}

const loginUser = async ( body : Auth | any ) => {
    
    const checkIs = await UserModel.findOne({ email: body.email })
    if(!checkIs) return "NOT_FOUND_USER";
    const passwordHash = checkIs.password //TODO el encriptado
    const isCorrect = await verified(body.password, passwordHash)
    if(!isCorrect) return "PASSWORD_INCORRECT"

    const token = generateToken(checkIs.email)

    const data = {
        token,
        user: checkIs
    }

    return data;

}

export { registerNewUser, loginUser }