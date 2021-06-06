const { JWT_TOKEN_KEY } = require('../../config/app')
const createError = require('http-errors')

const signOut = async (req, res) => {
  try {
    await res.clearCookie(JWT_TOKEN_KEY)
    return await res.json({ message: 'Successfully Signout!' })
  } catch (error) {
    if (error instanceof mongoose.CastError) {
      next(createError(404, 'Error Somthing Wrong'))
    }
    next(error)
  }
}

module.exports = signOut
