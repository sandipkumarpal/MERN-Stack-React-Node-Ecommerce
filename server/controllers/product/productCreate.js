const { IncomingForm } = require('formidable')
const _ = require('lodash')
const { errorHandler } = require('../../helpers/handleErrors')
const Product = require('../../models/product')

const productCreate = async (req, res) => {
  try {
    // parse a file upload
    const form = new IncomingForm()

    form.keepExtensions = true
    form.parse(req, (err, fields, file) => {
      if (err) {
        return res.status(400).json({ error: 'Image could not be uploaded!' })
      }
      const create = new Product(fields)
      if (file.photo) {
        create.photo.data = file.photo.path
        create.photo.contentType = file.photo.type
      }
      create.save((err, result) => {
        if (err) {
          return res.status(400).json({ error: errorHandler(err) })
        }
        res.json(result)
      })
    })
  } catch (error) {
    console.log(error)
    res.status(400).json({ error: errorHandler(error) })
  }
}

module.exports = productCreate
