import React from 'react'
import fetch from 'node-fetch'

import Stats from '@/components/stats'

const Home = ({ stats }) => <Stats stats={stats} />

// This function gets called at build time
export const getStaticProps = async () => {
  const res = await fetch('https://covid19.mathdro.id/api')
  const stats = await res.json()

  return {
    props: {
      stats,
    },
  }
}

export default Home
