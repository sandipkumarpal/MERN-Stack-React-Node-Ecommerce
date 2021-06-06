const Auth = require('../../models/auth')
const { errorHandler } = require('../../helpers/handleErrors')
const { comparePassword } = require('../../helpers/auth')
const jwt = require('jsonwebtoken')
const { JWT_TOKEN_KEY } = require('../../config/app')
const createError = require('http-errors')

const signIn = async (req, res, next) => {
  try {
    const { password, email } = req.body
    let user = await Auth.findOne({ email }).exec()
    if (!user) {
      throw createError(400, 'No User found! Please try again.')
    }

    const checkedhashPassword = await comparePassword(password, user.password)

    if (!checkedhashPassword) {
      throw createError(400, 'Oho wrong Password!!')
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    })

    user.password = undefined

    res.cookie(JWT_TOKEN_KEY, token, {
      httpOnly: true
    })
    return res.json({ user, token })
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(404, 'Invalid Authneticate!'))
    }
    next(error)
  }
}

module.exports = signIn
