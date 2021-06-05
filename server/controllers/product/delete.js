const { errorHandler } = require('../../helpers/handleErrors')

const productDelete = (req, res) => {
  const product = req.product
  product.remove((err, deleteProduct) => {
    if (err || !product) {
      return res.status(400).json({ error: errorHandler(err) })
    }
    res.json({ message: 'Product delete Successfully!' })
  })
}

module.exports = productDelete
