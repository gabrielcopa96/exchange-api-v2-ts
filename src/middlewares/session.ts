import { Request, Response ,NextFunction } from "express"
import { JwtPayload } from "jsonwebtoken";
import { verifyToken } from "../utils/jwt.handle";

interface RequestExt extends Request {
    user?: string | JwtPayload
}

const checkJwt = (req: RequestExt, res: Response, next: NextFunction) => {

    try {
        
        const jwtByUser = req.headers.authorization || null;
        const jwt = jwtByUser?.split(' ').pop() // -> Bearer sdfsdgfgdfgdfgdf
        const verify = verifyToken(`${jwt}`)
        if(!verify) {
            res.status(401)
            res.send('NO_HAVE_IN_JWT_VALIDATE')
        }
        req.user = verify
        console.log( { jwtByUser } )
        next();

    } catch (error) {
        res.status(400)
        res.send('SESSION_NOT_VALIDATE')
    }

}

export { checkJwt }