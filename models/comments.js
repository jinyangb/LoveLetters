const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Comment = new Schema(
  {
    Comment: { type: String }
  },
  { timestamps: true }
)

module.exports = mongoose.model('comments', Comment)
