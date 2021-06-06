const { errorHandler } = require('../../helpers/handleErrors')
const Category = require('../../models/category')
const createError = require('http-errors')

const categoryId = async (req, res, next, id) => {
  Category.findById(id).exec((err, category) => {
    if (err || !category) {
      throw createError(400, 'Category not found!')
      // return res.status(400).json({ error: 'Category not found!' })
    }
    req.category = category
    next()
  })
}

module.exports = categoryId
