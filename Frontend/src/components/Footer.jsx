import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Diagnosify</h3>
            <p className="text-gray-300">
              AI-powered disease prediction system to help you understand your health better.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="/prediction" className="text-gray-300 hover:text-white transition-colors">Prediction</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-300">
              For any questions or support, please reach out to us.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Diagnosify. Built with ❤️ for better health.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer