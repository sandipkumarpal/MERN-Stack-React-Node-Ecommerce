const express = require('express')
const { ROUTERS } = require('../../config/router')
const controllers = require('../../controllers')

const router = express.Router()

// Add Signup router path ['/signup']
router.post(ROUTERS.SIGNUP, controllers.signUp)

module.exports = router
