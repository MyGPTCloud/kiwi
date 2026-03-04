export default function Header() {  
  return (  
    <header className="bg-white border-b border-gray-200">  
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">  
        <div className="text-2xl font-bold text-blue-600">Kiwi Buff</div>  
        <div className="space-x-4">  
          <button className="px-4 py-2 text-gray-700 hover:text-blue-600">Sign In</button>  
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Get Started</button>  
        </div>  
      </nav>  
    </header>  
  )  
}  
