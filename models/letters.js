const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Letter = new Schema(
  {
    Name: { type: String },
    Date: { type: String },
    Content: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('letters', Letter)
