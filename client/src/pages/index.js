import React from 'react'
import Error from 'next/error'

function PageComponent () {
  return <Error statusCode={404} />
}

export default PageComponent
