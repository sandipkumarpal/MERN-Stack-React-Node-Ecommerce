const Product = require('../../models/product')

const productDetails = (req, res) => {
  req.product.photo = undefined
  res.json(req.product)
}

module.exports = productDetails
