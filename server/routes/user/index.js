const express = require('express')
const { ROUTERS } = require('../../config/router')
const controllers = require('../../controllers')
const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')
const router = express.Router()

const userId = 'userId'

// Add User router path ['/user/:id']
router.get(
  `${ROUTERS.USER}/secret/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.userSecretDetails
)

router.get(
  `${ROUTERS.USER}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  controllers.userDetails
)
router.put(
  `${ROUTERS.USER}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  controllers.userUpdate
)

router.param(userId, controllers.userById)

module.exports = router
