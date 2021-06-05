const express = require('express')
const controllers = require('../../controllers')
const { SIGNUP, SIGNIN, SIGNOUT } = require('./endPoints')
const router = express.Router()

// Add Signup router path ['/signup']
router.post(SIGNUP, controllers.signUp)
router.post(SIGNIN, controllers.signIn)
router.get(SIGNOUT, controllers.signOut)

module.exports = router
