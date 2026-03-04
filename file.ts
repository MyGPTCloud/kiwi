import type { Metadata } from 'next'  
export const metadata: Metadata = {  
  title: 'Kiwi Buff - NZ Real Estate AI',  
  description: 'AI-powered real estate analysis for New Zealand properties',  
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
