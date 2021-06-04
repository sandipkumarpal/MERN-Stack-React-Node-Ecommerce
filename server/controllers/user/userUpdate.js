const Auth = require('../../models/auth')

const userUpdate = (req, res) => {
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
        return res
          .status(400)
          .json({ error: 'You are not authorized to perform this action' })
      }
      res.json(user)
    }
  )
}

module.exports = userUpdate
