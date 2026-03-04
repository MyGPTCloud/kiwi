'use client'  
import Link from 'next/link'  
export default function Home() {  
  return (  
    <main style={{ padding: '40px', fontFamily: 'system-ui' }}>  
      <h1>Kiwi Buff - NZ Real Estate AI</h1>  
      <p>AI-powered property analysis and investment insights</p>  
        
      <div style={{ marginTop: '30px' }}>  
        <h2>Features:</h2>  
        <ul>  
          <li>Price Analysis</li>  
          <li>Rental ROI Calculation</li>  
          <li>Loan Schemes</li>  
          <li>Risk Assessment</li>  
          <li>Location Evaluation</li>  
          <li>Growth Potential</li>  
        </ul>  
      </div>  
      <div style={{ marginTop: '30px' }}>  
        <Link href="/dashboard" style={{   
          padding: '10px 20px',   
          backgroundColor: '#007bff',   
          color: 'white',   
          textDecoration: 'none',  
          borderRadius: '4px'  
        }}>  
          Go to Dashboard  
        </Link>  
      </div>  
    </main>  
  )  
}  
