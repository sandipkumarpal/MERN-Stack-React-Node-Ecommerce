const express = require('express')
const { ROUTER_PARAMS } = require('../../config/router')
const controllers = require('../../controllers')
const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')
const { USER_SECRET, USER_DETAILS, USER_UPDATE } = require('./endPoints')
const router = express.Router()

// Add User router path ['/user/:id']
router.get(
  USER_SECRET,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.userSecretDetails
)

router.get(USER_DETAILS, checkedSignIn, checkedAuth, controllers.userDetails)
router.put(USER_UPDATE, checkedSignIn, checkedAuth, controllers.userUpdate)

router.param(ROUTER_PARAMS.USER_ID, controllers.userById)

module.exports = router
