import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import login from './routes/authentication/login'
import register from './routes/authentication/register'
import token from './routes/authentication/token'

const port = 4003

const server = express()

// server.use(cors())
server.use(express.json())

server.use('/auth', login, register, token)

mongoose.connect(process.env.USERR, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'))
mongoose.connection
  .once('open', () => console.log('connection to mongoDb succesful'))
  .on('error', (err) => console.log(err, 'err in connecting to mongoDb'))

server.listen(port, () => {
  console.log(`server at ${port}`)
})