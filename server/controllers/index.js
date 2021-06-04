module.exports = {
  signUp: require('./auth/signUp'),
  signIn: require('./auth/signIn'),
  signOut: require('./auth/signOut'),
  userById: require('./user/userById'),
  userDetails: require('./user/userDetails'),
  categoryCreate: require('./category/categoryCreate'),
  categoryById: require('./category/categoryById'),
  categoryDetails: require('./category/categoryDetails'),
  categoryUpdate: require('./category/categoryUpdate'),
  categoryRemove: require('./category/categoryRemove'),
  categories: require('./category/categories'),
  productCreate: require('./product/productCreate'),
  productById: require('./product/productById'),
  productDetails: require('./product/productDetails'),
  productDelete: require('./product/productDelete'),
  productUpdate: require('./product/productUpdate'),
  products: require('./product/products')
}
