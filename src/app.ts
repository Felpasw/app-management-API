import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import router from './config/routes'
import  helmet from 'helmet'

const app = express()

const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(bodyParser.json())
app.use(cors({  origin: "*" }))
app.use(helmet())

app.use(router)

export default  app