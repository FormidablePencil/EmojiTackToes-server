import express from 'express'
import mongoose from 'mongoose'
import GameboardModel from '../../Models/GameboardModel'
import { gameResponses } from '../../types'
const putGame = express.Router()

putGame.put('/', async (req, res) => {
  const { gameId } = req.body
  const gameboard = await GameboardModel.findOne({gameId})
  if (!gameId) return res.status(404).send({ message: gameResponses.GameByIdDoesNotExist })
  gameboard.game = 'new edited'

  try {
    gameboard.save()
    res.send(200).send({ message: 'successfully updated' })
  } catch (err) {
    res.status(403).send({ message: err })
  }
})

export default putGame
