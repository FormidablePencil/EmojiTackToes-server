import { registerResponses } from "../types"
import UserModel from "../Models/UserModel"

const checkIfCredentialsExistent = async (req, res, next) => {
  const { password, username, email } = req.body
  const user_by_username = await UserModel.findOne({ username })
  const user_by_email = await UserModel.findOne({ email })
  if (user_by_username) return res.status(404).send({ message: registerResponses.usernameExists })
  if (user_by_email) return res.status(404).send({ message: registerResponses.emailExists })
  req.user = user_by_username
  next()
}

export default checkIfCredentialsExistent