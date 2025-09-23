import { Award, BookOpen, Users } from 'lucide-react'
import React from 'react'
import { Feature_card } from './Features_card'
import { LMS_NAME } from '@/constants/constants'

function Features_section() {
  return (
      <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold  mb-6">
              Why Choose <span className="text-primary">{LMS_NAME}</span>
            </h2>
            <p className="text-lg lg:text-xl  max-w-3xl mx-auto">
              Experience the future of learning with our cutting-edge platform designed for modern education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature_card
              icon={<BookOpen className="w-8 h-8 text-white" />}
              title="Interactive Courses"
              description="Engage with dynamic content including videos, quizzes, and hands-on projects designed to maximize learning retention."
            />
            <Feature_card
              icon={<Users className="w-8 h-8 text-white" />}
              title="Expert Instructors"
              description="Learn from industry professionals and subject matter experts who bring real-world experience to every lesson."
            />
            <Feature_card
              icon={<Award className="w-8 h-8 text-white" />}
              title="Certified Learning"
              description="Earn recognized certificates and credentials that validate your skills and boost your career prospects."
            />
          </div>
        </div>
      </section>
  )
}

export default Features_section