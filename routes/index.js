const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/letters', controllers.createLetter)

router.get('/letters', controllers.getAllLetters)

router.get('/letters/:id', controllers.getLetterById)

router.put('/letters/:id', controllers.updateLetter)
router.delete('/letters/:id', controllers.deleteLetter)

module.exports = router
