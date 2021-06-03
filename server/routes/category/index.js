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

module.exports = router
