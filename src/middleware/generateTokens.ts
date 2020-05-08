import jwt from 'jsonwebtoken'
import RefreshToken from '../Models/TokenModel'

const generateTokens = async (req, res, next) => {
  const { username } = req.body
  req.accessToken = jwt.sign({ username }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30m' }) //encrypted username 
  req.refreshToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)
  req.token = RefreshToken.findOne({token: req.refreshToken})
  req.foundToken = true
  if (req.token) return next()
  req.token = new RefreshToken({ token: req.refreshToken })
  next()
}

export default generateTokens