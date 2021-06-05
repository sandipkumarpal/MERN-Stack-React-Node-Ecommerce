const express = require('express')
const { ROUTER_PARAMS } = require('../../config/router')
const { user } = require('../../controllers')
const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')
const { USER_SECRET, USER_DETAILS, USER_UPDATE } = require('./requestPaths')
const router = express.Router()

// Add User router path ['/user/:id']
router.get(
  USER_SECRET,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  user.userSecretDetails
)

router.get(USER_DETAILS, checkedSignIn, checkedAuth, user.userDetails)
router.put(USER_UPDATE, checkedSignIn, checkedAuth, user.userUpdate)

router.param(ROUTER_PARAMS.USER_ID, user.userById)

module.exports = router
