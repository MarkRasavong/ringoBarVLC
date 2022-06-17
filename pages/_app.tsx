import type { AppProps } from 'next/app'
import { Fragment } from 'react'
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Fragment>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </Fragment>
  )
}

export default MyApp
