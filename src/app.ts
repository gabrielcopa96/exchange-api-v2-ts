import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { join } from 'path';
import { router } from './routes';
import db from './config/mongo'
const PORT = process.env.PORT || 3001
const app = express()

app.use( cors() )
app.use( express.json() )

app.use(router)

app.use( express.static(join(__dirname, "../static")) )
// app.get('/*', (req, res) => {
//     re
// })

db().then(() => console.log('conexion ready a mongoDB'))

app.listen( PORT, () => console.log(`Listo en el puerto ${PORT}`) )

