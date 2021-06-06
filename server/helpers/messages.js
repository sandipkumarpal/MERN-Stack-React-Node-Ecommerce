const getErrorMessages = (error = {}, success = false) => {
  return {
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
      code: error.code || 'invalid_code',
      path: error.path || '',
      timestamp: error.timestamp || '',
      lang: error.lang || 'en'
    },
    success
  }
}

const getSuccessMessages = (data, success = false, status = 1) => {
  return { data: { ...data }, success, status }
}

module.exports = {
  getErrorMessages,
  getSuccessMessages
}
