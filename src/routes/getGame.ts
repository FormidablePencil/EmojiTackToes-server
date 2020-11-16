import express from 'express'
import mongoose from 'mongoose'
import GameboardModel from '../Models/GameboardModel'
import { gameResponses } from '../types'
const getGame = express.Router()

getGame.get('/', async (req, res) => {
  const { gameId } = req.body
  const gameboard = await GameboardModel.findOne(gameId)
  if (!gameId) return res.status(404).send({ message: gameResponses.GameByIdDoesNotExist })

  try {
    res.status(200).send({ data: gameboard, message: gameResponses.heresGameData })
  } catch (err) {
    res.status(403).send({ message: err })
  }
})

export default getGame