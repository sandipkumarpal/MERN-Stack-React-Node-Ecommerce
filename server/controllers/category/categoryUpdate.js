const { errorHandler } = require('../../helpers/handleErrors')
const Category = require('../../models/category')

const categoryUpdate = async (req, res) => {
  try {
    const updateCategory = req.category
    updateCategory.name = req.body.name
    updateCategory.save((err, data) => {
      if (err || !data) {
        return
      }
      res.json({ data })
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: errorHandler(error) })
  }
}

module.exports = categoryUpdate
