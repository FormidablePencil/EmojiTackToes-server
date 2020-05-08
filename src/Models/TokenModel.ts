import mongoose from 'mongoose'
const Schema = mongoose.Schema

const RefreshTokenSchema = new Schema({
  token: {
    type: String,
    required: true,
    unique: true
  }
})

const RefreshToken = mongoose.model('token', RefreshTokenSchema)
export default RefreshToken