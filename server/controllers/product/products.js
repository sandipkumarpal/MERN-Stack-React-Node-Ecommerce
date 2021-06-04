const Product = require('../../models/product')

const products = (req, res) => {
  console.log(req.query)
  const { order = 'asc', sortBy = '_id', limit = 6 } = req.query || {}
  console.log({ order, sortBy, limit })
  Product.find()
    .select('-photo')
    .populate('category')
    .sort({ [sortBy]: order })
    .limit(parseInt(limit))
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({ error: 'Products not found!' })
      }
      res.send(data)
    })
}

module.exports = products
