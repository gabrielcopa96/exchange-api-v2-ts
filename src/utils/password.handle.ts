import { hash, compare } from 'bcryptjs'


const encrypt = async ( password: string | any ) => {

    const passwordHash = await hash( password, 8 )
    return passwordHash

}

const verified = async (pass: string | any , passHash: string | any ) => {

    const isCorrect = await compare(pass, passHash)
    return isCorrect

}

export { encrypt , verified }