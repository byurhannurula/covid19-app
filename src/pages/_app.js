import React from 'react'

import { SEO, Header, Footer } from '@/components/layout'
import { GlobalStyles, Wrapper } from '@/styles'

const MyApp = ({ Component, pageProps }) => (
  <>
    <SEO />
    <Header />
    <GlobalStyles />
    <Wrapper as="main" role="main">
      <Component {...pageProps} />
    </Wrapper>
    <Footer />
  </>
)

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {}

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }

  return { pageProps }
}

export default MyApp
