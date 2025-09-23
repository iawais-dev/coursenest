import { ChevronRight } from 'lucide-react'
import React from 'react'

function Cta_section() {
  return (
          <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold  mb-6">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-lg lg:text-xl mb-8">
            Join millions of learners worldwide and unlock your potential today
          </p>
          <button className="bg-white text-gray-900 px-8 py-4 rounded-xl font-bold hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center">
            Start Learning Now
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>
  )
}

export default Cta_section