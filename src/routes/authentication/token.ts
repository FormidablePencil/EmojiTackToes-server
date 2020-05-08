import express from 'express'
import jwt from 'jsonwebtoken'
import RefreshToken from '../../Models/TokenModel'
import { tokenResponses } from '../../types'
const token = express.Router()
import generateTokens from '../../middleware/generateTokens'

token.post('/token', async (req: any, res) => {
  const { token } = req.body
  const refreshTokenFromDb = await RefreshToken.findOne({ token })
  if (!refreshTokenFromDb) res.send(403).send({ message: tokenResponses.invalidToken })

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err: any, username: any) => {
    if (err) return res.sendStatus(403)
    const accessToken = generateAccessToken(username)
    res.json({ accessToken })
  })

})

const generateAccessToken = (username) => {
  return jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' }) //encrypted username 
}

export default token


