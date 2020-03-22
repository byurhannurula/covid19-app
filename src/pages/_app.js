import React from 'react'

import { SEO, Header, Footer } from '@/components/layout'
import { GlobalStyles, Wrapper } from '@/styles'
import { AppProvider } from '@/context'

const MyApp = ({ Component, pageProps }) => (
  <AppProvider>
    <SEO />
    <Header />
    <GlobalStyles />
    <Wrapper as="main" role="main">
      <Component {...pageProps} />
    </Wrapper>
    <Footer />
  </AppProvider>
)

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default MyApp
