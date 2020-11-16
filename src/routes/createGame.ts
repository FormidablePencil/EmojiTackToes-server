import express from 'express'
import mongoose from 'mongoose'
const createGame = express.Router()
import { gameResponses } from '../types'
import GameboardModel from '../Models/GameboardModel'

createGame.post('/', async (req, res) => {
  const { gameId } = req.body
  if (!gameId) return res.status(404).send({ message: gameResponses })
  const game = new GameboardModel({
    sq0: null,
    sq1: null,
    sq2: null,
    sq3: null,
    sq4: null,
    sq5: null,
    sq6: null,
    sq7: null,
    sq8: null,
  })
  try {
    await game.save()
    res.status(200).send({ message: gameResponses.createNewGame })
  } catch (err) {
    res.status(404).send({ message: err })
  }
})

export default createGame