import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}`; // ./src/routes
const router = Router();

/**
 * 
 * index.ts -> items
 * @returns
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split('.').shift()
    return file
}
// ['auth.routes.ts', 'category.routes.ts']

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName)
    if(cleanName !== "index") {
        import(`./${cleanName}.routes`).then(moduleRouter => {
            console.log('Se esta cargando la ruta..', cleanName)
            router.use(`/${cleanName}`, moduleRouter.router)
        })
    }
})




export { router };