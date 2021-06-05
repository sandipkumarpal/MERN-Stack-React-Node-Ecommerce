const express = require('express')
const { ROUTER_PARAMS } = require('../../config/router')
const controllers = require('../../controllers')
const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')
const {
  PRODUCT_CREATE,
  PRODUCT_DETAILS,
  PRODUCT_UPDATE,
  PRODUCT_DELETE,
  PRODUCTS,
  PRODUCTS_RELATED,
  PRODUCTS_CATEGORIES,
  PRODUCTS_BY_SEARCH,
  PRODUCT_PHOTO
} = require('./endPoints')
const router = express.Router()

// Add Product router path ['/product/create/:productId']
router.post(
  PRODUCT_CREATE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.productCreate
)
// Get Product router path ['/product/:productId/:userId']
router.get(PRODUCT_DETAILS, controllers.productDetails)
router.delete(
  PRODUCT_DELETE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.productDelete
)
router.put(
  PRODUCT_UPDATE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.productUpdate
)

router.param(ROUTER_PARAMS.USER_ID, controllers.userById)
router.param(ROUTER_PARAMS.PRODUCT_ID, controllers.productById)

/*
 * sell
 * router:  /products?sortBy=sold&order=[desc|Asc]&limit=4
 * arrival
 * router:  /products?sortBy=createdAt&order=[desc|Asc]&limit=4
 *
 * Check if no params are sent THEN all products are returned
 */
router.get(PRODUCTS, controllers.products)

router.get(PRODUCTS_RELATED, controllers.productsRelated)

router.get(PRODUCTS_CATEGORIES, controllers.productsCategories)

router.post(PRODUCTS_BY_SEARCH, controllers.productBySearch)

router.get(PRODUCT_PHOTO, controllers.productPhoto)

module.exports = router
