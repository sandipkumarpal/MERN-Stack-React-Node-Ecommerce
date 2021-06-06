const { errorHandler } = require('../../helpers/handleErrors')
const Category = require('../../models/category')

const categories = async (req, res) => {
  Category.find().exec((err, data) => {
    if (err || !data) {
      // throw createError(400, 'User Email is taken!')
      return res.status(400).json({ error: errorHandler(err) })
    }
    res.json(data)
  })
}

module.exports = categories
