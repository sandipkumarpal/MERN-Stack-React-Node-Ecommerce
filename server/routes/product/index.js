const express = require('express')
const { ROUTERS } = require('../../config/router')
const controllers = require('../../controllers')
const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')
const router = express.Router()

const userId = 'userId'
const productId = 'productId'

// Add Product router path ['/product/create/:productId']
router.post(
  `${ROUTERS.PRODUCT_CREATE}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.productCreate
)
// Get Product router path ['/product/:productId/:userId']
router.get(`${ROUTERS.PRODUCT}/:${productId}`, controllers.productDetails)
router.delete(
  `${ROUTERS.PRODUCT}/:${productId}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.productDelete
)
router.put(
  `${ROUTERS.PRODUCT}/:${productId}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.productUpdate
)

router.param(userId, controllers.userById)
router.param(productId, controllers.productById)

module.exports = router
