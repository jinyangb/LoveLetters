const mongoose = require('mongoose')
const LetterSchema = require('./plants')
const CommentSchema = require('./comments')

const Letter = mongoose.model('plants', LetterSchema)
const Comment = mongoose.model('plants', CommentSchema)

module.exports = {
  Letter,
  Comment
}
