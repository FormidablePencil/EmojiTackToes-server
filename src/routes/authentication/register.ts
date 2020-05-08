import express, { Request } from 'express'
const register = express.Router()
import UserModel from '../../Models/UserModel'
import { registerResponses } from '../../types'
import bcrypt from 'bcrypt'
import validationFormat from '../../middleware/validationFormat'
import checkIfCredentialsExistent from '../../middleware/checkIfCredentialsExistent'
import generateTokens from '../../middleware/generateTokens'

interface ReqTypes extends Request {
  body: {
    password: string
    username: string
    email: string
  },
  accessToken: string
  refreshToken: string
  token: any
}

register.post('/register', validationFormat, checkIfCredentialsExistent, generateTokens, async (req: ReqTypes, res, next) => {
  const { password, username, email } = req.body
  const { accessToken, refreshToken, token } = req
  const hashedPassword = await bcrypt.hash(password, 10)
  const user = new UserModel({
    username,
    password: hashedPassword,
    email
  })
  
  try {
    await token.save()
    await user.save()
    return res.status(200).send({
      message: registerResponses.successfullyCreatedUser,
      accessToken,
      refreshToken,
      username,
      email
    })
  } catch (err) {
    return res.send({ message: err })
  }
})

export default register