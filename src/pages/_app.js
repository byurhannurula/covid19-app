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

export default MyApp
