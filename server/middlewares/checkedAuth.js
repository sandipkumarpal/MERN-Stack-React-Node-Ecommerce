const jwt = require('express-jwt')

const checkedAuth = (req, res, next) => {
  const {
    profile: { _id: reqProfileId = '' } = {},
    auth: { _id: reqAuthId = '' } = {}
  } = req || {}

  const isUser = reqProfileId.toString() === reqAuthId.toString()

  if (!isUser) {
    res.status(403).json({ error: 'Access denied' })
  }

  next()
}

module.exports = { checkedAuth }
