const mongoose = require('mongoose')
const { Schema } = mongoose

const productSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 32
    },
    description: {
      type: String,
      require: true,
      maxLength: 2000
    },
    price: {
      type: Number,
      trim: true,
      require: true,
      maxLength: 32
    },
    category: {
      type: Schema.ObjectId,
      ref: 'Category',
      require: true
    },
    quantity: {
      type: Number
    },
    photo: {
      data: Buffer,
      contentType: String
    },
    shipping: {
      require: false,
      type: Boolean
    }
  },
  { timestamps: true }
)

const Product = mongoose.model('Product', productSchema)
module.exports = Product
