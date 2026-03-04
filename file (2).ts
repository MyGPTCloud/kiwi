'use client'  
import { useState } from 'react'  
export default function Dashboard() {  
  const [address, setAddress] = useState('')  
  const [loading, setLoading] = useState(false)  
  const [result, setResult] = useState<any>(null)  
  const handleAnalyze = async () => {  
    if (!address.trim()) {  
      alert('Please enter an address')  
      return  
    }  
    setLoading(true)  
    try {  
      const response = await fetch('/api/analyze', {  
        method: 'POST',  
        headers: { 'Content-Type': 'application/json' },  
        body: JSON.stringify({ address })  
      })  
      const data = await response.json()  
      setResult(data)  
    } catch (error) {  
      console.error('Error:', error)  
      alert('Analysis failed')  
    } finally {  
      setLoading(false)  
    }  
  }  
  return (  
    <main style={{ padding: '40px', fontFamily: 'system-ui', maxWidth: '800px', margin: '0 auto' }}>  
      <h1>Property Analysis Dashboard</h1>  
        
      <div style={{ marginTop: '20px' }}>  
        <input  
          type="text"  
          placeholder="Enter property address..."  
          value={address}  
          onChange={(e) => setAddress(e.target.value)}  
          style={{  
            width: '100%',  
            padding: '10px',  
            fontSize: '16px',  
            marginBottom: '10px',  
            boxSizing: 'border-box'  
          }}  
        />  
        <button  
          onClick={handleAnalyze}  
          disabled={loading}  
          style={{  
            padding: '10px 20px',  
            backgroundColor: '#28a745',  
            color: 'white',  
            border: 'none',  
            borderRadius: '4px',  
            cursor: loading ? 'not-allowed' : 'pointer',  
            opacity: loading ? 0.6 : 1  
          }}  
        >  
          {loading ? 'Analyzing...' : 'Analyze Property'}  
        </button>  
      </div>  
      {result && (  
        <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>  
          <h2>Analysis Results</h2>  
          <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>  
            {JSON.stringify(result, null, 2)}  
          </pre>  
        </div>  
      )}  
    </main>  
  )  
}  
