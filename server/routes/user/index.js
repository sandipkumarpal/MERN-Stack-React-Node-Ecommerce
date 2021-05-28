const express = require('express')
const { ROUTERS } = require('../../config/router')
const userController = require('../../controllers/user')

const router = express.Router()

router.get(ROUTERS.USER, userController)

module.exports = router
