const express = require('express')
const { ROUTERS } = require('../../config/router')
const controllers = require('../../controllers')
const { auth } = require('../../middlewares/auth')
const router = express.Router()

// Add Signup router path ['/signup']
router.post(ROUTERS.SIGNUP, controllers.signUp)
router.post(ROUTERS.SIGNIN, controllers.signIn)
router.get(ROUTERS.SIGNOUT, controllers.signOut)
router.get('/hello', auth, (req, res) => {
  res.send('Hello is working')
})

module.exports = router
