const Auth = require('../../models/auth')
const createError = require('http-errors')

const userId = (req, res, next, id) => {
  Auth.findById(id).exec((err, user) => {
    console.log({ user })
    if (err || !user) {
      throw createError(400, 'user not found')
    }
    req.profile = user
    next()
  })
}

module.exports = userId
