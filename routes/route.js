const express = require('express')
const blogcontroller = require('../controller/blogcontroller')
const router = express.Router()
router.get('/',blogcontroller.get_index)
router.get('/blogs',blogcontroller.get_blogs)
router.post('/blogs',blogcontroller.post_blogs)
router.get('/blogs/:id',blogcontroller.get_update)
router.post('/delete',blogcontroller.post_delete)

module.exports = router