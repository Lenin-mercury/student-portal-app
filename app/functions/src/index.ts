import { NestFactory } from '@nestjs/core'
import {ExpressAdapter} from '@nestjs/platform-express'
import { AppModule } from './app.module'
import * as functions from 'firebase-functions'
import * as express from 'express'

const server = express()
// server.use('/',(req,res)=>{
//     return res.send("Helo worl")
// })

export const createNestServer = async(expressInstance) => {
    const app = await NestFactory.create(
        AppModule,
        new ExpressAdapter(expressInstance),
    )
    return app.init()
}

createNestServer(server).then(v => console.log('Nest Ready')).catch(err => console.log('Nest Broken', err))

export const api = functions.https.onRequest(server)
