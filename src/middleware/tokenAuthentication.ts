import jwt from 'jsonwebtoken'
import { serverResponses } from '../types'

//authHeader === authorization ??
//split token
//verify tokens

const tokenAuthentication = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token === null) return res.status(401).send({ message: serverResponses.tokenNotGiven })

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, obj) => {
    if (err) return res.status(401).send({ message: serverResponses.tokenNonExistent })
    req.username = obj.username
    next()
  })
}

export default tokenAuthentication