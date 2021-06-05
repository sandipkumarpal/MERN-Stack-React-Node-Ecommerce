const { errorHandler } = require('../../helpers/handleErrors')
const Category = require('../../models/category')

const categoryId = async (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      return res.status(400).json({ error: 'Category not found!' })
    }
    req.category = category
    next()
  })
}

module.exports = categoryId
