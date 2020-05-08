import mongoose from 'mongoose'
const Schema = mongoose.Schema

// ! why we clutter the router wiith if statements when use model a type similarly the same as TypeScript.
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
})

const UserModel = mongoose.model('user', UserSchema)
export default UserModel