const bcrypt = require('bcrypt')

const saltRounds = 12

// Generate a salt and hash
const getHashedPassword = password => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (err, salt) => {
      if (err) {
        reject(err)
      }
      // Store hash in your password DB.
      bcrypt.hash(password, salt, (err, hash) => {
        if (err) {
          reject(err)
        }
        resolve(hash)
      })
    })
  })
}

const comparePassword = (password, hasedPassword) => {
  return bcrypt.compare(password, hasedPassword)
}

module.exports = { getHashedPassword, comparePassword }
