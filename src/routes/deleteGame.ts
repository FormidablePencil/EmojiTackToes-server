import express from 'express'
import GameboardModel from '../Models/GameboardModel'
import { gameResponses } from '../types'
const deleteGame = express.Router()

deleteGame.delete('/', (req, res) => {
  const { gameId } = req.body
  GameboardModel.deleteOne({ gameId }, (err) => {
    if (err) res.status(404).send({ message: err })
    res.status(200).send({ message: gameResponses.deletedGame })
  })
})

export default deleteGame