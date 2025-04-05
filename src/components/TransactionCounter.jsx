import { useState } from 'react'
import { usePublicClient } from 'wagmi'

export default function TransactionCounter({ address }) {
  const [transactionCount, setTransactionCount] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const publicClient = usePublicClient()

  const getTransactionCount = async () => {
    setLoading(true)
    setError('')
    try {
      const count = await publicClient.getTransactionCount({ address })
      setTransactionCount(count)
    } catch (err) {
      setError('Failed to fetch transaction count')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="transaction-counter">
      <h2>Check Transaction Count</h2>
      <button onClick={getTransactionCount} disabled={loading}>
        {loading ? 'Loading...' : 'Get Transaction Count'}
      </button>
      
      {error && <p className="error">{error}</p>}
      
      {transactionCount !== null && (
        <div className="result">
          <h3>Results</h3>
          <p>Wallet Address: {address}</p>
          <p>Total Transactions: {transactionCount}</p>
        </div>
      )}
    </div>
  )
}