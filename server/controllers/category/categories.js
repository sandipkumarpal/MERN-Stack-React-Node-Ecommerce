const Category = require('../../models/category')

const categories = async (req, res) => {
  Category.find().exec((err, data) => {
    if (err || !data) {
      return res.status(400).json({ error: errorHandler(err) })
    }
    res.json(data)
  })
}

module.exports = categories
