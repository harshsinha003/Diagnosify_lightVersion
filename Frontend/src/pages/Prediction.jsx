import React, { useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'

// Common symptoms list - you can expand this based on your model
const symptomsList = [
  'fever', 'headache', 'cough', 'fatigue', 'nausea', 'vomiting', 'diarrhea', 
  'abdominal_pain', 'chest_pain', 'shortness_of_breath', 'dizziness', 'muscle_pain',
  'joint_pain', 'back_pain', 'neck_pain', 'sore_throat', 'runny_nose', 'sneezing',
  'loss_of_appetite', 'weight_loss', 'weight_gain', 'insomnia', 'anxiety', 'depression',
  'rash', 'itching', 'swelling', 'bruising', 'bleeding', 'constipation', 'frequent_urination',
  'painful_urination', 'blurred_vision', 'hearing_loss', 'ear_pain', 'memory_problems'
]

const Prediction = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([])
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)
  const [searchTerm, setSearchTerm] = useState('')

  const handleSymptomToggle = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom))
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom])
    }
  }

  const handlePredict = async () => {
    if (selectedSymptoms.length === 0) {
      toast.error('Please select at least one symptom')
      return
    }

    setLoading(true)
    try {
      // Create symptom array (132 features - adjust based on your model)
      const symptomArray = new Array(132).fill(0)
      
      // Map selected symptoms to array indices
      // This is a simplified mapping - you'll need to map to actual indices based on your model
      selectedSymptoms.forEach((symptom, index) => {
        if (index < 132) {
          symptomArray[index] = 1
        }
      })

      const response = await axios.post(`${import.meta.env.VITE_PYTHON_API_URL || 'http://localhost:2000'}/api/predict`, symptomArray)
      
      setResult(response.data)
      toast.success('Prediction completed!')
    } catch (error) {
      console.error('Prediction error:', error)
      toast.error('Failed to get prediction. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const filteredSymptoms = symptomsList.filter(symptom => 
    symptom.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Health Prediction</h1>
          <p className="text-lg text-gray-600">
            Select the symptoms you're experiencing and get AI-powered health insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Symptoms Selection */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Select Symptoms</h2>
            
            {/* Search bar */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search symptoms..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Selected symptoms count */}
            <div className="mb-4">
              <span className="text-sm text-gray-600">
                Selected: {selectedSymptoms.length} symptoms
              </span>
            </div>

            {/* Symptoms grid */}
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {filteredSymptoms.map((symptom) => (
                <label
                  key={symptom}
                  className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                    selectedSymptoms.includes(symptom)
                      ? 'bg-blue-100 border-2 border-blue-500'
                      : 'bg-gray-50 border-2 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedSymptoms.includes(symptom)}
                    onChange={() => handleSymptomToggle(symptom)}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    {symptom.replace(/_/g, ' ')}
                  </span>
                </label>
              ))}
            </div>

            {/* Predict button */}
            <div className="mt-6">
              <button
                onClick={handlePredict}
                disabled={loading || selectedSymptoms.length === 0}
                className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                  loading || selectedSymptoms.length === 0
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? 'Analyzing...' : 'Get Prediction'}
              </button>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Prediction Results</h2>
            
            {!result ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <p className="text-gray-500">
                  Select symptoms and click "Get Prediction" to see results
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Predicted Disease */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-800 mb-2">Predicted Condition</h3>
                  <p className="text-lg font-medium text-blue-900">{result.disease}</p>
                </div>

                {/* Description */}
                {result.description && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Description</h3>
                    <p className="text-gray-600">{result.description}</p>
                  </div>
                )}

                {/* Medications */}
                {result.medication && result.medication.length > 0 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Recommended Medications</h3>
                    <ul className="list-disc list-inside text-green-700 space-y-1">
                      {result.medication.map((med, index) => (
                        <li key={index}>{med}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Diet Recommendations */}
                {result.diets && result.diets.length > 0 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="font-semibold text-yellow-800 mb-2">Diet Recommendations</h3>
                    <ul className="list-disc list-inside text-yellow-700 space-y-1">
                      {result.diets.map((diet, index) => (
                        <li key={index}>{diet}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Workout Recommendations */}
                {result.workout && result.workout.length > 0 && (
                  <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                    <h3 className="font-semibold text-purple-800 mb-2">Exercise Recommendations</h3>
                    <ul className="list-disc list-inside text-purple-700 space-y-1">
                      {result.workout.map((exercise, index) => (
                        <li key={index}>{exercise}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Disclaimer */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="font-semibold text-red-800 mb-2">⚠️ Important Notice</h3>
                  <p className="text-red-700 text-sm">
                    This is an AI-generated prediction and should not replace professional medical advice. 
                    Please consult with a qualified healthcare provider for proper diagnosis and treatment.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prediction