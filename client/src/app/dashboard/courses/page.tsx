'use client'
import StudentCourses from '@/components/dashboard/courses/StudentCourses'
import TeacherCourses from '@/components/dashboard/courses/TeacherCourses'
import StudentDashboard from '@/components/dashboard/StudentDashboard'
import TeacherDashboard from '@/components/dashboard/TeacherDashboard'
import { useUser } from '@/hook/useUser'
import React from 'react'

function page() {
    const  { user } = useUser()
  return (
    <div>
        {
            user?.user.role === 'student' ? <StudentCourses /> : <TeacherCourses />
        }
    </div>
  )
}

export default page