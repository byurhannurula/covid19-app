/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (url, method, payload) => {
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const doRequest = async () => {
    try {
      const res = await axios({
        url,
        method,
        data: payload,
        headers: { 'Content-Type': 'application/json' },
      })

      setResponse(res.data.countries)
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    doRequest()
  }, [])

  return { response, error, loading }
}
