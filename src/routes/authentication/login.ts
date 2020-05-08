import express, { Request, Router } from 'express'
const login = express.Router()
import UserModel from '../../Models/UserModel'
import { serverResponses, loginResponses } from '../../types'
import bcrypt from 'bcrypt'
import tokenAuthentication from '../../middleware/tokenAuthentication'
import generateTokens from '../../middleware/generateTokens'

interface LoginReqType extends Request {
  body: { password, username },
  accessToken, refreshToken, token, foundToken,
}
login.post('/login', generateTokens, async (req: LoginReqType, res) => {
  const { password, username } = req.body
  const { accessToken, refreshToken } = req
  const user: any = await UserModel.findOne({ username })
  const email = user.email
  if (!user) return res.status(403).send({ message: loginResponses.invalidCredentials })
  if (!await bcrypt.compare(password, user.password)) {
    return res.send(403).send({ message: loginResponses.invalidCredentials })
  }
  try {
    if (!req.foundToken) { await req.token.save() }
    return res.status(200).send({ accessToken, refreshToken, username, email, message: serverResponses.loggedInSentTokens })
  } catch (err) {
    return res.status(400).send({ message: err })
  }
})

export default login