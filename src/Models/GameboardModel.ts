import mongoose from 'mongoose'
const Schema = mongoose.Schema

const GameboardModelSchema = new Schema({
  gameId: Number,
  game: {
    sq0: String,
    sq1: String,
    sq2: String,
    sq3: String,
    sq4: String,
    sq5: String,
    sq6: String,
    sq7: String,
    sq8: String,
  }
})

const GameboardModel = mongoose.model('game', GameboardModelSchema)
export default GameboardModel