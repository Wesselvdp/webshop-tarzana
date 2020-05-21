import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/structure/Layout'

import '../styles/main.scss'

const theme = {
  colors: {
    primary: '#fff'
  },
  maxWidth: '1440px',
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout >
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp