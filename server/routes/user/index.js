const express = require('express')
const { ROUTERS } = require('../../config/router')

const router = express.Router()

router.get(ROUTERS.USER, (req, res) => res.send('Hello i am from User router'))

module.exports = router
