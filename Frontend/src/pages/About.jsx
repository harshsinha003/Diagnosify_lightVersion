import React from 'react'

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Diagnosify</h1>
          <p className="text-lg text-gray-600">
            Learn more about our mission to make healthcare more accessible through AI
          </p>
        </div>

        <div className="prose max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              Diagnosify is designed to help individuals gain better insights into their health through 
              the power of artificial intelligence. Our system analyzes symptoms and provides preliminary 
              health assessments to guide users toward appropriate healthcare decisions.
            </p>
            <p className="text-gray-600">
              We believe that everyone should have access to basic health information and guidance, 
              especially in situations where immediate medical consultation might not be available.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
            <p className="text-gray-600 mb-4">
              Our system uses machine learning algorithms trained on medical datasets to analyze 
              symptom patterns and suggest possible health conditions. The AI model considers 
              various factors and symptom combinations to provide accurate predictions.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Advanced machine learning algorithms</li>
              <li>Trained on comprehensive medical datasets</li>
              <li>Pattern recognition for symptom analysis</li>
              <li>Evidence-based recommendations</li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Important Disclaimer</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-yellow-800 font-medium">
                This system is for informational purposes only and should not replace professional medical advice. 
                Always consult with qualified healthcare professionals for proper diagnosis and treatment.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technology Stack</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Frontend</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>React.js</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                  <li>Vite</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700 mb-2">Backend & AI</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>Python Flask</li>
                  <li>Scikit-learn</li>
                  <li>Pandas</li>
                  <li>Machine Learning Models</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About