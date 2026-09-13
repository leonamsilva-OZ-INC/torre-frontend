import { useState, useEffect } from 'react'
import { fetchDashboardKPIs } from '../services/api'

export function useDashboard() {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetchDashboardKPIs()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { data, loading, error }
}
