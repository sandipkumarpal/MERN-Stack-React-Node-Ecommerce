const express = require('express')
const { ROUTER_PARAMS } = require('../../config/router')
const { category, user } = require('../../controllers')
const {
  CATEGORY_CREATE,
  CATEGORIES,
  CATEGORY_DETAILS,
  CATEGORY_UPDATE,
  CATEGORY_DELETE
} = require('./requestPaths')

const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')

const router = express.Router()

// Add Category router path ['/category/create/:userId']
router.post(
  CATEGORY_CREATE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  category.create
)
router.param(ROUTER_PARAMS.USER_ID, user.userId)

// Add Category router path ['/category/:categoryId']
router.get(CATEGORY_DETAILS, category.details)
router.param(ROUTER_PARAMS.CATEGORY_ID, category.categoryId)

// Add Category router path ['/category/:categoryId/:userId']
router.put(
  CATEGORY_UPDATE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  category.update
)

// Add Category router path ['/category/:categoryId/:userId']
router.delete(
  CATEGORY_DELETE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  category.remove
)

// Add Category router path ['/categorys']
router.get(CATEGORIES, category.categories)

module.exports = router
