import React from 'react'
import fetch from 'node-fetch'

import Stats from '@/components/stats'

const Country = ({ stats }) => <Stats stats={stats} />

export const getStaticPaths = async () => {
  const res = await fetch('https://covid19.mathdro.id/api/countries')
  const { countries } = await res.json()

  const paths = Object.entries(countries).map(item => ({
    params: {
      country: item[1],
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { country } }) => {
  const res = await fetch(`https://covid19.mathdro.id/api/countries/${country}`)
  const data = await res.json()

  return {
    props: {
      stats: data,
    },
  }
}

export default Country
