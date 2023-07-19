const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// api/users/sign up
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)

//api/users/login
router.post('/login', userCtrl.login, userCtrl.respondWithToken)

// api/user/bookmarks
router.get('/bookmarks', checkToken, ensureLoggedIn, userCtrl.getBookmarkByUser, userCtrl.respondWithBookmarks) // verifys users token, then uses email to find users bookmarks


module.exports = router