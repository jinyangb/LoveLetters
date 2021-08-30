const Letter = require('../models/letter')
const Comment = require('../models/comments')

const createLetter = async (req, res) => {
  try {
    const letter = await new Letter(req.body)
    await letter.save()
    return res.status(201).json({
      letter
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllLetters = async (req, res) => {
  try {
    const letters = await Letter.find()
    return res.status(200).json({ letters })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getLetterById = async (req, res) => {
  try {
    const { id } = req.params
    const letter = await Letter.findById(id)
    if (letter) {
      return res.status(200).json({ letter })
    }
    return res.status(404).send('Letter with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateLetter = async (req, res) => {
  try {
    const { id } = req.params
    await Letter.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, letter) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!letter) {
          res.status(500).send('Letter not found!')
        }
        return res.status(200).json(plant)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteLetter = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Letter.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Letter deleted')
    }
    throw new Error('Letter not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

// comments section
const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find()
    return res.status(200).json({ comments })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCommentById = async (req, res) => {
  try {
    const { id } = req.params
    const comment = await Comment.findById(id)
    if (comment) {
      return res.status(200).json({ comment })
    }
    return res.status(404).send('Comment with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateComment = async (req, res) => {
  try {
    const { id } = req.params
    await Comment.findByIdAndUpdate(
      id,
      req.body,
      { new: true },
      (err, comment) => {
        if (err) {
          res.status(500).send(err)
        }
        if (!comment) {
          res.status(500).send('Comment not found!')
        }
        return res.status(200).json(comment)
      }
    )
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createLetter,
  getAllLetters,
  getLetterById,
  updateLetter,
  deleteLetter,
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
}
