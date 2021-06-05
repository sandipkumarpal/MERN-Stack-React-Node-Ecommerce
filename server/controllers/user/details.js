const Auth = require('../../models/auth')

const details = (req, res) => {
  res.json({ user: req.profile })
}

module.exports = details
