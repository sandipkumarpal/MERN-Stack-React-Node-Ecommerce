const express = require('express')
const { ROUTERS } = require('../../config/router')
const controllers = require('../../controllers')
const router = express.Router()

const { checkedAdmin } = require('../../middlewares/checkedAdmin')
const { checkedAuth } = require('../../middlewares/checkedAuth')
const { checkedSignIn } = require('../../middlewares/checkedSignIn')

const userId = 'userId'
const categoryId = 'categoryId'

// Add Category router path ['/category/create/:userId']
router.post(
  `${ROUTERS.CATEGORY_CREATE}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.categoryCreate
)
router.param(userId, controllers.userById)

// Add Category router path ['/category/:categoryId']
router.get(`${ROUTERS.CATEGORY}/:${categoryId}`, controllers.categoryDetails)
router.param(categoryId, controllers.categoryById)

// Add Category router path ['/category/:categoryId/:userId']
router.put(
  `${ROUTERS.CATEGORY}/:${categoryId}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.categoryUpdate
)

// Add Category router path ['/category/:categoryId/:userId']
router.delete(
  `${ROUTERS.CATEGORY}/:${categoryId}/:${userId}`,
  checkedSignIn,
  checkedAuth,
  checkedAdmin,
  controllers.categoryRemove
)

// Add Category router path ['/categorys']
router.get(`${ROUTERS.CATEGORIES}`, controllers.categories)

module.exports = router
