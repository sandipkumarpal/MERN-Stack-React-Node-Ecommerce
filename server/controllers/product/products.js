const Product = require('../../models/product')
const createError = require('http-errors')

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
        throw createError(400, 'Products not found!')
      }
      res.send(data)
    })
}

module.exports = products
