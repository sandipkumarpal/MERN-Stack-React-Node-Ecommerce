import React from 'react'

function AppWrapper (props) {
  const { children, Component } = props
  return <div>{children}</div>
}

export default AppWrapper
