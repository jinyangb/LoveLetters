const { Schema } = require('mongoose')

const Game = new Schema(
  {
    comment: { type: String }
    // Genre: { type: String, required: true }
    // publisher_id: { type: Schema.Types.ObjectId, ref: 'publisher_id' }
  },
  { timestamps: true }
)

module.exports = Game
