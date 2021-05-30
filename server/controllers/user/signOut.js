const { JWT_TOKEN_KEY } = require('../../config/app')

const signOut = async (req, res) => {
  try {
    await res.clearCookie(JWT_TOKEN_KEY)
    return await res.json({ message: 'Successfully Signout!' })
  } catch (error) {
    console.log({ error })
    return res.status(400).send('Error Somthing Wrong')
  }
}

module.exports = signOut
