const productPhoto = (req, res, next) => {
  const {
    product: {
      photo: { data: photoData, contentType }
    }
  } = req
  if (photoData) {
    res.setHeader('Content-Type', contentType)
    console.log(res.get('Content-Type'))
    return res.send(photoData)
  }
  next()
}

module.exports = productPhoto
