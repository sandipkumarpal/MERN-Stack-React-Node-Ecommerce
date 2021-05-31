const express = require('express')
const { ROUTERS } = require('../../config/router')
const controllers = require('../../controllers')
const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')
const router = express.Router()

const userId = 'userId'

// Add Product router path ['/product/create/:id']
router.post(
  `${ROUTERS.PRODUCT_CREATE}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.productCreate
)

router.param(userId, controllers.userById)

module.exports = router
