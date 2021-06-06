const { errorHandler } = require('../../helpers/handleErrors')
const Category = require('../../models/category')
const createError = require('http-errors')

const create = async (req, res, next) => {
  try {
    const createCategory = new Category(req.body)
    createCategory.save((err, data) => {
      if (err || !data) {
        throw createError(400, 'Can not create new Category')
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

module.exports = create
