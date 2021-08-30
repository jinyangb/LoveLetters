const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.post('/letters', controllers.createLetter)
router.get('/letters', controllers.getAllLetters)
router.get('/letters/:id', controllers.getLetterById)
router.put('/letters/:id', controllers.updateLetter)
router.delete('/letters/:id', controllers.deleteLetter)
// comments section
router.post('/comments', controllers.createComment)
router.get('/comments', controllers.getAllComments)
router.get('/comments/:id', controllers.getCommentById)
router.put('/comments/:id', controllers.updateComment)
router.delete('/comments/:id', controllers.deleteComment)

module.exports = router
