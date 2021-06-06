const { errorHandler } = require('../../helpers/handleErrors')
const Category = require('../../models/category')
const createError = require('http-errors')

const categoryUpdate = async (req, res, next) => {
  try {
    const updateCategory = req.category
    updateCategory.name = req.body.name
    updateCategory.save((err, data) => {
      if (err || !data) {
        throw createError(400, 'Can not update the Category')
      }
      res.json({ data })
    })
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(404, 'Invalid Category error!'))
    }
    next(error)
  }
}

module.exports = categoryUpdate
