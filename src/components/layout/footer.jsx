import React from 'react'
import styled from 'styled-components'

export const Footer = () => (
  <StyledFooter>
    <p>
      &copy; {new Date().getFullYear()}, Built using{' '}
      <a target="_blank" rel="noopener noreferrer" href="https://nextjs.org/">
        Next.js
      </a>{' '}
      by{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://byurhanbeyzat.com/"
      >
        Byurhan Beyzat
      </a>
      . Data source:{' '}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/mathdroid/covid-19-api"
      >
        here
      </a>
    </p>
  </StyledFooter>
)

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 48px;
  text-align: center;

  p {
    font-size: 16px;
  }

  a {
    text-decoration: none;
  }
`
