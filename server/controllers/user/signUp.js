const User = require('../../models/user')
const { errorHandler } = require('../../helpers/handleErrors')
const { getHashedPassword, comparePassword } = require('../../helpers/auth')

const emailRgx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const signUp = async (req, res) => {
  console.log('req.body', req.body)
  try {
    const { name, password, email } = req.body
    // Validation
    if (!name && !password && !email) {
      return res
        .status(400)
        .send('Name, Password, Email and Phone number required')
    }
    if (!name) return res.status(400).send('Name is required!')
    if (!password || password.length < 6) {
      return res
        .status(400)
        .send('Password is required and should be min 6 characters long')
    }
    if (!emailRgx.test(email)) {
      return res.status(400).send('Email not')
    }

    let userExist = await User.findOne({ email }).exec()
    if (userExist) return res.status(400).send('User Email is taken!')

    const hashedPassword = await getHashedPassword(password)
    const user = new User({ name, email, password: hashedPassword })

    await user.save()
    return res.json({ ok: true })
  } catch (error) {
    console.log({ error })
    return res.status(400).send(errorHandler(error))
  }
}

module.exports = signUp
