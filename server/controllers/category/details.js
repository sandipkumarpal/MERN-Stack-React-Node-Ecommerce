const Category = require('../../models/category')

const details = async (req, res) => {
  return res.json(req.category)
}

module.exports = details
