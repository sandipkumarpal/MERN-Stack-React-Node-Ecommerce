const express = require('express')
const { ROUTERS } = require('../../config/router')
const controllers = require('../../controllers')
const { auth } = require('../../middlewares/auth')
const router = express.Router()

// Add Signup router path ['/signup']
router.post(ROUTERS.SIGNUP, controllers.signUp)
router.post(ROUTERS.SIGNIN, controllers.signIn)

module.exports = router
