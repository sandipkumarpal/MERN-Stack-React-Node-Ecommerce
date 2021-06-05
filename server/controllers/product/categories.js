const Product = require('../../models/product')

const productsCategories = (req, res) => {
  Product.distinct('category', {}, (err, data) => {
    if (err) {
      return res.status(400).json({ error: 'Categories not found!' })
    }
    res.send(data)
  })
}

module.exports = productsCategories
