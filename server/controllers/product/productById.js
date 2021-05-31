const Product = require('../../models/product')

const productById = (req, res, next, id) => {
  Product.findById(id).exec((err, product) => {
    if (err || !product) {
      return res.status(400).json({ error: 'Product not found!' })
    }
    req.product = product
    next()
  })
}

module.exports = productById
