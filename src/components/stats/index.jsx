import React from 'react'

import { formatNumber, formatDate } from '@/utils'
import { CardWrapper, Card } from './styles'

const Stats = ({ stats }) => (
  <>
    <CardWrapper>
      <Card>
        <h3>Confirmed</h3>
        <h4>{formatNumber(stats.confirmed.value)}</h4>
      </Card>
      <Card>
        <h3>Recovered</h3>
        <h4>{formatNumber(stats.recovered.value)}</h4>
      </Card>
      <Card>
        <h3>Deaths</h3>
        <h4>{formatNumber(stats.deaths.value)}</h4>
      </Card>
    </CardWrapper>
    <p style={{ textAlign: 'center', margin: '32px auto' }}>
      Last updated: {formatDate(stats.lastUpdate)}
    </p>
  </>
)

export default Stats
