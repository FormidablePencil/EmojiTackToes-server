import express from 'express'
import mongoose from 'mongoose'
import 'dotenv/config'
import retrieveUserData from './routes/main/retrieveUserData'
import createGame from './routes/main/createGame'
import getGame from './routes/main/getGame'
import putGame from './routes/main/putGame'
import deleteGame from './routes/main/deleteGame'

const port = 4005

const server = express()

server.use(express.json())

server.use('/game', retrieveUserData, createGame, getGame, putGame, deleteGame)

mongoose.connect(process.env.USERR, { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to db'))
mongoose.connection
  .once('open', () => console.log('connection to mongoDb successful'))
  .on('error', (err) => console.log(err, 'error in connecting to mongoDb'))

server.listen(port)