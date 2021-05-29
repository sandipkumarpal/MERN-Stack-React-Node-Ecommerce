const jwt = require('express-jwt')

const auth = jwt({
  getToken: (req, res) => req.cookies.token,
  secret: process.env.JWT_SECRET,
  algorithms: ['HS256']
})

module.exports = { auth }
