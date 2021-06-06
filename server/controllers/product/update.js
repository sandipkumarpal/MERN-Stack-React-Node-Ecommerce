const { IncomingForm } = require('formidable')
const _ = require('lodash')
const { errorHandler } = require('../../helpers/handleErrors')
const Product = require('../../models/product')
const createError = require('http-errors')

const productUpdate = (req, res, next) => {
  try {
    // parse a file upload
    const form = new IncomingForm()

    form.keepExtensions = true
    form.parse(req, (err, fields, file) => {
      if (err) {
        throw createError(400, 'Image could not be uploaded!')
      }
      console.log({ fields, file })
      const { name, description, price, category, quantity, shipping } = fields

      if (
        !name ||
        !description ||
        !price ||
        !category ||
        !quantity ||
        !shipping
      ) {
        throw createError(400, 'All fields are required!')
      }

      let update = req.product
      update = _.extend(update, fields)

      if (file.photo) {
        // Bellow (1mb = 1000000) photo size
        if (file.photo.size > 1000000) {
          throw createError(400, 'Image should be 1mb in size')
        }
        update.photo.data = file.photo.path
        update.photo.contentType = file.photo.type
      }

      update.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: errorHandler(err) })
        }
        res.json(result)
      })
    })
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(404, 'Invalid Product error!'))
    }
    next(error)
  }
}

module.exports = productUpdate
