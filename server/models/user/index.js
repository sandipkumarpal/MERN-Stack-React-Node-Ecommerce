const mongoose = require('mongoose')
const { Schema } = mongoose

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      maxLength: 32
    },
    email: {
      type: String,
      trim: true,
      require: true,
      unique: true
    },
    password: {
      type: String,
      require: true,
      min: 2,
      max: 64
    },
    phone: {
      type: String,
      require: false
    },
    picture: {
      type: String,
      default: '/avatar.png'
    },
    about: {
      type: String,
      trim: true
    },
    role: {
      type: Number,
      default: 0
    },
    history: {
      type: Array,
      default: []
    },
    salt: String,
    stripe_account_id: '',
    stripe_seller: {},
    stripeSession: {}
  },
  { timestamps: true }
)

const User = mongoose.model('User', userSchema)
module.exports = User
