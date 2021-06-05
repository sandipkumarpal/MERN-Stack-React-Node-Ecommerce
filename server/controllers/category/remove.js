const { errorHandler } = require('../../helpers/handleErrors')
const Category = require('../../models/category')

const remove = async (req, res) => {
  const category = req.category
  category.remove((err, deleteCategory) => {
    if (err || !product) {
      return res.status(400).json({ error: errorHandler(err) })
    }
    res.json({ message: 'Category delete Successfully!' })
  })
}

module.exports = remove
