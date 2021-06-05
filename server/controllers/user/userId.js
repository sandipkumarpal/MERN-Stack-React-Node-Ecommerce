const Auth = require('../../models/auth')

const userId = (req, res, next, id) => {
  Auth.findById(id).exec((err, user) => {
    console.log({ user })
    if (err || !user) {
      return res.status(400).json({ error: 'user not found' })
    }
    req.profile = user
    next()
  })
}

module.exports = userId
