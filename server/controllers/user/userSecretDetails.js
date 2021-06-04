const Auth = require('../../models/auth')

const userDetails = (req, res) => {
  res.json({ user: req.profile })
}

module.exports = userDetails
