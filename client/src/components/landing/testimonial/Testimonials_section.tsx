import React from 'react'
import { Testimonials_card } from './Testimonial_card'
import { LMS_NAME } from '@/constants/constants'

function Testimonials_section() {
  return (
    <section className="py-20 px-6 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold  mb-6">What Our <span className='text-primary'>Students</span>  Say</h2>
            <p className="text-lg lg:text-xl ">Join thousands of satisfied learners who have transformed their careers</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Testimonials_card
              name="Sarah Johnson"
              role="Software Developer"
              content={`${LMS_NAME} transformed my career. The interactive courses and expert instructors helped me land my dream job in tech.`}
              rating={5}
              avatar="SJ"
            />
            <Testimonials_card
              name="Michael Chen"
              role="Marketing Manager"
              content="The platform is incredibly user-friendly and the course quality is outstanding. Highly recommend for professional development."
              rating={5}
              avatar="MC"
            />
            <Testimonials_card
              name="Emily Davis"
              role="UX Designer"
              content="I love the flexibility and the practical projects. It's like having a personal mentor guiding you through each step."
              rating={5}
              avatar="ED"
            />
          </div>
        </div>
      </section>
  )
}

export default Testimonials_section