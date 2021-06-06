const Auth = require('../../models/auth')
const { errorHandler } = require('../../helpers/handleErrors')
const { getHashedPassword } = require('../../helpers/auth')
const createError = require('http-errors')
const mongoose = require('mongoose')

const emailRgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const signUp = async (req, res, next) => {
  try {
    const { name, password, email } = req.body
    if (!name && !password && !email) {
      throw createError(400, 'Name, Password, Email and Phone number required')
    }
    if (!name) {
      throw createError(400, 'Name is required!')
    }
    if (!password || password.length < 6) {
      throw createError(
        400,
        'Password is required and should be min 6 characters long'
      )
    }
    if (!emailRgx.test(email)) {
      throw createError(400, 'User Email id is required!')
    }

    const userExist = await Auth.findOne({ email }).exec()
    if (userExist) {
      throw createError(400, 'User Email is taken!')
    }

    const hashedPassword = await getHashedPassword(password)
    const user = new Auth({ name, email, password: hashedPassword })

    await user.save()
    return res.json({ ok: true })
  } catch (error) {
    // return res.status(400).send(errorHandler(error))
    if (error instanceof mongoose.CastError) {
      next(createError(404, 'Invalid Authneticate!'))
    }
    next(error)
  }
}

module.exports = signUp
