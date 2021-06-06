import 'antd/dist/antd.css'
import { Fragment } from 'react'
import AppWrapper from '../containers/Wrappers/App'
import GlobalStyle from '../GlobalStyle'

function MyApp ({ Component, pageProps }) {
  return (
    <Fragment>
      <GlobalStyle />
      <AppWrapper Component={Component}>
        <Component {...pageProps} />
      </AppWrapper>
    </Fragment>
  )
}

export default MyApp
