const router = require('express').Router()
const bookmarkCtrl = require('../../controllers/api/bookmarks')
const checkToken = require('../../config/checkToken')



// Delete/destroy bookmark ---- api/bookmarks/:d
router.delete('/:id', checkToken, bookmarkCtrl.destroyBookmark, bookmarkCtrl.respondWithBookmarks)

// Put/Update bookmark ----- api/bookmarks/:id
router.put('/:id', checkToken, bookmarkCtrl.updateBookmark, bookmarkCtrl.respondWithBookmarks)

// Post/create bookmark ------ api/bookmarks/:id
router.post('/', checkToken, bookmarkCtrl.createBookmark, bookmarkCtrl.respondWithBookmarks)