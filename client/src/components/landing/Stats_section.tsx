import React from 'react'

function Stats_section() {
  return (
       <section className="py-16 ">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '50K+', label: 'Active Students' },
              { value: '1,200+', label: 'Expert Instructors' },
              { value: '5,000+', label: 'Online Courses' },
              { value: '98%', label: 'Satisfaction Rate' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className=" font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Stats_section