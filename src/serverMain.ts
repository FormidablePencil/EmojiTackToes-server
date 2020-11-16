import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import createGame from './routes/createGame'
import getGame from './routes/getGame'
import putGame from './routes/putGame'
import deleteGame from './routes/deleteGame'

const port = 4005

const server = express()

server.use(express.json())

server.use('/game', createGame, getGame, putGame, deleteGame)

mongoose.connect(process.env.USERR, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'))
mongoose.connection
  .once('open', () => console.log('connection to mongoDb successful'))
  .on('error', (err) => console.log(err, 'error in connecting to mongoDb'))

server.listen(port)