const express = require('express')
const { ROUTER_PARAMS } = require('../../config/router')
const controllers = require('../../controllers')
const {
  CATEGORY_CREATE,
  CATEGORIES,
  CATEGORY_DETAILS,
  CATEGORY_UPDATE,
  CATEGORY_DELETE
} = require('./endPoints')

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
  controllers.categoryCreate
)
router.param(ROUTER_PARAMS.USER_ID, controllers.userById)

// Add Category router path ['/category/:categoryId']
router.get(CATEGORY_DETAILS, controllers.categoryDetails)
router.param(ROUTER_PARAMS.CATEGORY_ID, controllers.categoryById)

// Add Category router path ['/category/:categoryId/:userId']
router.put(
  CATEGORY_UPDATE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.categoryUpdate
)

// Add Category router path ['/category/:categoryId/:userId']
router.delete(
  CATEGORY_DELETE,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.categoryRemove
)

// Add Category router path ['/categorys']
router.get(CATEGORIES, controllers.categories)

module.exports = router
