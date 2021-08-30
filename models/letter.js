const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Letter = new Schema(
  {
    name: { type: String },
    date: { type: String },
    body: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('letters', Letter)
