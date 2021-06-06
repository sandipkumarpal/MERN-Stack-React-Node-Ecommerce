const Product = require('../../models/product')
const createError = require('http-errors')

/*
 * It will find the products based on the req product category
 * Other products that has the same category, will be returned
 */
const productsRelated = (req, res) => {
  const { query, product } = req
  const { limit = 6 } = query
  const { category } = product

  Product.find({ _id: { $ne: product }, category })
    .limit(limit)
    .populate('category', '_id name')
    .exec((err, data) => {
      if (err) {
        throw createError(400, 'Products not found!')
      }
      res.send(data)
    })
}

module.exports = productsRelated
