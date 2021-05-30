const User = require('../../models/user')
const { errorHandler } = require('../../helpers/handleErrors')
const { comparePassword } = require('../../helpers/auth')
const jwt = require('jsonwebtoken')

const signIn = async (req, res) => {
  try {
    const { password, email } = req.body
    // Validation
    let user = await User.findOne({ email }).exec()
    if (!user) return res.status(400).send('No User found! Please try again.')

    const checkedhashPassword = await comparePassword(password, user.password)

    if (!checkedhashPassword) {
      return res.status(400).send('Wrong Password!!')
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '7d'
    })

    user.password = undefined

    res.cookie('token', token, {
      httpOnly: true
    })
    console.log({ user, token })
    return res.json({ user, token })
  } catch (error) {
    console.log({ error })
    return res.status(400).send(errorHandler(error))
  }
}

module.exports = signIn
