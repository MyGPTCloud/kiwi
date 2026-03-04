export default function Pricing() {  
  const plans = [  
    { name: 'Scout', price: '$29', features: ['5 properties/month', 'Basic analysis'] },  
    { name: 'Agent Pro', price: '$99', features: ['50 properties/month', 'Advanced analysis', 'Team access'] },  
    { name: 'Developer Max', price: '$299', features: ['Unlimited', 'API access', 'Custom integrations'] },  
  ]  
  return (  
    <section className="py-20">  
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
        <h2 className="text-4xl font-bold text-center mb-12">Pricing</h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {plans.map((plan) => (  
            <div key={plan.name} className="border border-gray-200 rounded-lg p-8 text-center">  
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>  
              <p className="text-4xl font-bold text-blue-600 mb-6">{plan.price}</p>  
              <ul className="text-left space-y-3 mb-8">  
                {plan.features.map((feature) => (  
                  <li key={feature} className="text-gray-600">✓ {feature}</li>  
                ))}  
              </ul>  
              <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">  
                Get Started  
              </button>  
            </div>  
          ))}  
        </div>  
      </div>  
    </section>  
  )  
}  
