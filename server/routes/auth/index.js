const express = require('express')
const { auth } = require('../../controllers')
const requestPaths = require('./requestPaths')

const router = express.Router()

// Add Signup router path ['/signup']
router.post(requestPaths.SIGNUP, auth.signUp)
router.post(requestPaths.SIGNIN, auth.signIn)
router.get(requestPaths.SIGNOUT, auth.signOut)

module.exports = router
