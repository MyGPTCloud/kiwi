export default function Features() {  
  const features = [  
    { title: 'RLV Analysis', description: 'Accurate Rateable Land Value calculations' },  
    { title: 'Financial Insights', description: 'ROI, cash flow, and investment metrics' },  
    { title: 'Risk Assessment', description: 'Market risk and property risk analysis' },  
    { title: 'GIS Integration', description: 'Geospatial data and location insights' },  
  ]  
  return (  
    <section className="bg-gray-50 py-20">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  
          {features.map((feature) => (  
            <div key={feature.title} className="bg-white p-6 rounded-lg shadow">  
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>  
              <p className="text-gray-600">{feature.description}</p>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  )  
}  
