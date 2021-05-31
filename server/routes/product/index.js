const express = require('express')
const { ROUTERS } = require('../../config/router')
const controllers = require('../../controllers')
const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')
const router = express.Router()

const userId = 'userId'
const productId = 'productId'

// Add Product router path ['/product/create/:id']
router.post(
  `${ROUTERS.PRODUCT_CREATE}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.productCreate
)
// Get Product router path ['/product/:id']

router.get(`${ROUTERS.PRODUCT}/:${productId}`, controllers.productDetails)

router.param(userId, controllers.userById)
router.param(productId, controllers.productById)

module.exports = router
