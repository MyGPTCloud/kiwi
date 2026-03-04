export async function POST(request: Request) {  
  try {  
    const { address } = await request.json()  
    if (!address) {  
      return Response.json({ error: 'Address is required' }, { status: 400 })  
    }  
    // 这里可以集成 Dify 或其他 AI 服务  
    const analysis = {  
      address,  
      priceAnalysis: 'Pending',  
      roiEstimate: '5-7%',  
      riskLevel: 'Medium',  
      location: 'Auckland CBD',  
      growthPotential: 'High',  
      timestamp: new Date().toISOString()  
    }  
    return Response.json(analysis)  
  } catch (error) {  
    return Response.json({ error: 'Analysis failed' }, { status: 500 })  
  }  
}  
