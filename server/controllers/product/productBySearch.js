const Product = require('../../models/product')

const productBySearch = (req, res) => {
  const {
    body: { order = 'desc', sortBy = '_id', limit = 100, skip, filters }
  } = req
  let findArgs = {}

  for (let key in filters) {
    if (filters[key].length > 0 && key === 'price') {
      // gte -  greater than price [0-10]
      // lte - less than
      findArgs[key] = {
        $gte: filters[key][0],
        $lte: filters[key][1]
      }
    }
    findArgs[key] = filters[key]
  }

  Product.find(findArgs)
    .select('-photo')
    .populate('category')
    .sort({ [sortBy]: order })
    .skip(skip)
    .limit(limit)
    .exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: 'Products not found'
        })
      }
      res.json({
        size: data.length,
        data
      })
    })
}

module.exports = productBySearch
