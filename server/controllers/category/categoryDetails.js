const Category = require('../../models/category')

const categoryDetails = async (req, res) => {
  return res.json(req.category)
}

module.exports = categoryDetails
