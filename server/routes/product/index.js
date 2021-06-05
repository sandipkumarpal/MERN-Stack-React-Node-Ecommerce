const express = require('express')
const { ROUTER_PARAMS } = require('../../config/router')
const { product, user } = require('../../controllers')
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
} = require('./requestPaths')
const router = express.Router()

// Add Product router path ['/product/create/:productId']
router.post(
  PRODUCT_CREATE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  product.create
)
// Get Product router path ['/product/:productId/:userId']
router.get(PRODUCT_DETAILS, product.productDetails)
router.delete(
  PRODUCT_DELETE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  product.delete
)
router.put(
  PRODUCT_UPDATE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  product.update
)

router.param(ROUTER_PARAMS.USER_ID, user.userId)
router.param(ROUTER_PARAMS.PRODUCT_ID, product.productId)

/*
 * sell
 * router:  /products?sortBy=sold&order=[desc|Asc]&limit=4
 * arrival
 * router:  /products?sortBy=createdAt&order=[desc|Asc]&limit=4
 *
 * Check if no params are sent THEN all products are returned
 */
router.get(PRODUCTS, product.products)

router.get(PRODUCTS_RELATED, product.related)

router.get(PRODUCTS_CATEGORIES, product.categories)

router.post(PRODUCTS_BY_SEARCH, product.search)

router.get(PRODUCT_PHOTO, product.photo)

module.exports = router
