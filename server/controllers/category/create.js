const { errorHandler } = require('../../helpers/handleErrors')
const Category = require('../../models/category')

const create = async (req, res) => {
  try {
    const createCategory = new Category(req.body)
    createCategory.save((err, data) => {
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

module.exports = create
