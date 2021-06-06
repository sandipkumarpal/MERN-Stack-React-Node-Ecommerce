const Auth = require('../../models/auth')
const createError = require('http-errors')

const update = (req, res) => {
  const {
    profile: { _id },
    body
  } = req
  Auth.findByIdAndUpdate(
    { _id },
    { $set: body },
    { new: true },
    (err, user) => {
      if (err) {
        throw createError(400, 'You are not authorized to perform this action')
      }
      res.json(user)
    }
  )
}

module.exports = update
