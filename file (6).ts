import type { Metadata } from 'next'  
import './globals.css'  
export const metadata: Metadata = {  
  title: 'Kiwi Buff - AI Real Estate Analysis',  
  description: 'AI-powered real estate analysis for investors, agents, and developers',  
}  
export default function RootLayout({  
  children,  
}: {  
  children: React.ReactNode  
}) {  
  return (  
    <html lang="en">  
      <body>{children}</body>  
    </html>  
  )  
}  
