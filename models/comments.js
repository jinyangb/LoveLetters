const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    comment: { type: String },
    letter_id: { type: Schema.Types.ObjectId, ref: 'letter_id' }
  },
  { timestamps: true }
)

// module.exports = Comment

module.exports = mongoose.model('comments', Comment)