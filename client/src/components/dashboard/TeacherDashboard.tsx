
import React from 'react'
import TopBar from './comps/TopBar'
import StatsGrid from './comps/StatsGrid'
import ActiveCourses from './comps/ActiveCourses'
import BottomNav from './comps/BottomNav'

function TeacherDashboard() {
  return (
    <div>
        <TopBar role='teacher' username='awais' userId='901348103' />
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8'>
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Welcome back! 👋</h1>
          <p className="text-muted-foreground">Continue your learning journey and achieve your goals</p>
        </div>
        <StatsGrid />
        <ActiveCourses />
        <BottomNav />
    </div>
    </div>
  )
}

export default TeacherDashboard