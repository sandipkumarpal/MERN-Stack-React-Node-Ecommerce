const checkedAdmin = (req, res, next) => {
  const { profile: { role } = {} } = req || {}

  if (role === 0) {
    res.status(403).json({ error: 'Admin resourse! Access denied!' })
  }
  next()
}

module.exports = { checkedAdmin }
