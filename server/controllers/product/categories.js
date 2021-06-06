const Product = require('../../models/product')
const createError = require('http-errors')

const productsCategories = (req, res) => {
  Product.distinct('category', {}, (err, data) => {
    if (err) {
      throw createError(400, 'Categories not found!')
    }
    res.send(data)
  })
}

module.exports = productsCategories
