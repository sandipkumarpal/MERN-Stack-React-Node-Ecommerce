const { ROUTER_PARAMS } = require('../../config/router')

const USER = '/user'
const USER_SECRET = `${USER}/secret/:${ROUTER_PARAMS.USER_ID}`
const USER_DETAILS = `${USER}/:${ROUTER_PARAMS.USER_ID}`
const USER_UPDATE = `${USER}/:${ROUTER_PARAMS.USER_ID}`

module.exports = { USER, USER_SECRET, USER_DETAILS, USER_UPDATE }
