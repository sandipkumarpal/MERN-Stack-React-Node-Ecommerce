const Auth = require('../../models/auth')

const secretDetails = (req, res) => {
  res.json({ user: req.profile })
}

module.exports = secretDetails
